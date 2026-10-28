import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FactoryService } from '../../../core/services/factory.service';
import { OrganizationService } from '../../../core/services/organization.service';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmDialogService } from '../../../shared/services/confirm-dialog.service';
import { FieldErrorComponent } from '../../../shared/components/field-error/field-error.component';
import { Factory, Organization } from '../../../core/models/master-data';

@Component({
  selector: 'vx-factory',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FieldErrorComponent],
  template: `
    <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
      <div><h5 class="fw-bold mb-0">Factories</h5><small class="text-muted">Plants under an organization — the multi-factory scope root.</small></div>
      <button class="btn btn-primary btn-sm" (click)="toggleForm()"><i class="bi bi-plus-lg me-1"></i>{{ showForm() ? 'Cancel' : 'New factory' }}</button>
    </div>

    @if (showForm()) {
      <div class="vx-card p-3 mb-3">
        <form [formGroup]="form" (ngSubmit)="save()" class="row g-2">
          <div class="col-md-3">
            <select class="form-select form-select-sm" formControlName="organizationId">
              <option [ngValue]="null">Organization *</option>
              @for (o of orgs(); track o.id) { <option [ngValue]="o.id">{{ o.code }} — {{ o.name }}</option> }
            </select>
          </div>
          <div class="col-md-2"><input class="form-control form-control-sm" formControlName="code" placeholder="Code *"><vx-field-error [control]="form.get('code')" /></div>
          <div class="col-md-3"><input class="form-control form-control-sm" formControlName="name" placeholder="Name *"><vx-field-error [control]="form.get('name')" /></div>
          <div class="col-md-2"><input class="form-control form-control-sm" formControlName="location" placeholder="Location"><vx-field-error [control]="form.get('location')" /></div>
          <div class="col-md-1"><input class="form-control form-control-sm" formControlName="timeZone" placeholder="TZ"><vx-field-error [control]="form.get('timeZone')" /></div>
          <div class="col-md-1"><button class="btn btn-primary btn-sm w-100" type="submit" [disabled]="saving()">{{ editingId() ? 'Save' : 'Add' }}</button></div>
        </form>
      </div>
    }

    <div class="vx-card p-0 overflow-auto">
      <table class="table vx-table table-hover align-middle mb-0">
        <thead><tr><th>Code</th><th>Name</th><th>Org ID</th><th>Location</th><th>Status</th><th class="text-end">Actions</th></tr></thead>
        <tbody>
          @if (loading()) { <tr><td colspan="6" class="text-center text-muted py-4"><span class="spinner-border spinner-border-sm"></span> Loading…</td></tr> }
          @for (f of items(); track f.id) {
            <tr>
              <td class="mono">{{ f.code }}</td>
              <td class="fw-semibold">{{ f.name }}</td>
              <td class="mono">{{ f.organizationId }}</td>
              <td>{{ f.location || '—' }}</td>
              <td><span class="badge" [style.background]="f.status==='ACTIVE' ? 'rgba(111,191,115,.18)' : 'rgba(212,106,90,.18)'" [style.color]="f.status==='ACTIVE' ? '#6fbf73' : '#d46a5a'">{{ f.status }}</span></td>
              <td class="text-end">
                <button class="btn btn-sm btn-outline-secondary me-1" (click)="edit(f)"><i class="bi bi-pencil"></i></button>
                <button class="btn btn-sm btn-outline-danger" (click)="remove(f)"><i class="bi bi-trash"></i></button>
              </td>
            </tr>
          }
          @if (!loading() && items().length===0) { <tr><td colspan="6" class="text-center text-muted py-4">No factories yet.</td></tr> }
        </tbody>
      </table>
    </div>
  `,
  styles: ['.mono{font-family:monospace;}']
})
export class FactoryComponent implements OnInit {
  items = signal<Factory[]>([]);
  orgs = signal<Organization[]>([]);
  loading = signal(false);
  saving = signal(false);
  showForm = signal(false);
  editingId = signal<number | null>(null);

  form = this.fb.group({
    organizationId: [null as number | null, Validators.required],
    code: ['', Validators.required],
    name: ['', Validators.required],
    location: [''],
    timeZone: [''],
    status: ['ACTIVE']
  });

  constructor(private fb: FormBuilder, private service: FactoryService, private orgService: OrganizationService, private toast: ToastService, private confirm: ConfirmDialogService) {}

  ngOnInit() { this.load(); this.orgService.list(0, 100).subscribe(res => this.orgs.set(res.data.content)); }

  load() {
    this.loading.set(true);
    this.service.list().subscribe({
      next: res => { this.items.set(res.data.content); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }

  toggleForm() { this.showForm.update(v => !v); if (!this.showForm()) { this.form.reset({ status: 'ACTIVE', organizationId: null }); this.editingId.set(null); } }

  edit(f: Factory) {
    this.editingId.set(f.id);
    this.showForm.set(true);
    this.form.patchValue({ organizationId: f.organizationId, code: f.code, name: f.name, location: f.location ?? '', timeZone: f.timeZone ?? '', status: f.status });
  }

  save() {
    if (this.form.invalid) { this.toast.error('Organization, code and name are required.'); return; }
    this.saving.set(true);
    const body = this.form.value as Partial<Factory>;
    const req$ = this.editingId() ? this.service.update(this.editingId()!, body) : this.service.create(body);
    req$.subscribe({
      next: () => { this.saving.set(false); this.toast.success('Saved.'); this.toggleForm(); this.load(); },
      error: () => this.saving.set(false)
    });
  }

  async remove(f: Factory) {
    if (!(await this.confirm.confirm({ message: `Delete factory "${f.name}"?`, danger: true, confirmLabel: 'Delete' }))) return;
    this.service.delete(f.id).subscribe({ next: () => { this.toast.success('Deleted.'); this.load(); }, error: () => {} });
  }
}
