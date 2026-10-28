import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { OrganizationService } from '../../../core/services/organization.service';
import { ToastService } from '../../../core/services/toast.service';
import { ConfirmDialogService } from '../../../shared/services/confirm-dialog.service';
import { FieldErrorComponent } from '../../../shared/components/field-error/field-error.component';
import { PaginationComponent } from '../../../shared/components/pagination/pagination.component';
import { StatusBadgeComponent } from '../../../shared/components/status-badge/status-badge.component';
import { Organization } from '../../../core/models/master-data';

@Component({
  selector: 'vx-organization',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FieldErrorComponent, PaginationComponent, StatusBadgeComponent],
  template: `
    <div class="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
      <div><h5 class="fw-bold mb-0" style="color:#0f172a;">Organizations</h5><small style="color:#64748b;">Top-level legal entities — factories belong to one.</small></div>
      <button class="btn btn-primary btn-sm" (click)="toggleForm()"><i class="bi bi-plus-lg me-1"></i>{{ showForm() ? 'Cancel' : 'New organization' }}</button>
    </div>
    @if (showForm()) {
      <div class="vx-card p-3 mb-3">
        <form [formGroup]="form" (ngSubmit)="save()" class="row g-2">
          <div class="col-md-2"><input class="form-control form-control-sm" formControlName="code" placeholder="Code *"><vx-field-error [control]="form.get('code')" /></div>
          <div class="col-md-4"><input class="form-control form-control-sm" formControlName="name" placeholder="Name *"><vx-field-error [control]="form.get('name')" /></div>
          <div class="col-md-2"><input class="form-control form-control-sm" formControlName="country" placeholder="Country"><vx-field-error [control]="form.get('country')" /></div>
          <div class="col-md-3"><input class="form-control form-control-sm" formControlName="address" placeholder="Address"><vx-field-error [control]="form.get('address')" /></div>
          <div class="col-md-1"><button class="btn btn-primary btn-sm w-100" type="submit" [disabled]="saving()">{{ editingId() ? 'Save' : 'Add' }}</button></div>
        </form>
      </div>
    }

    <div class="d-flex gap-2 mb-2 align-items-center flex-wrap">
      <div class="position-relative" style="width:260px;max-width:100%;">
        <i class="bi bi-search position-absolute" style="left:.7rem;top:50%;transform:translateY(-50%);color:#94a3b8;font-size:.8rem;"></i>
        <input type="text" class="form-control form-control-sm" style="padding-left:2rem;border-radius:10px;" placeholder="Filter by code, name, country…" [(ngModel)]="searchQuery" (ngModelChange)="page.set(1)">
      </div>
      <span class="small" style="color:#94a3b8;">{{ filtered().length }} result(s)</span>
    </div>

    <div class="vx-card p-0 overflow-auto">
      <table class="table vx-table table-hover align-middle mb-0">
        <thead><tr><th>Code</th><th>Name</th><th>Country</th><th>Status</th><th class="text-end">Actions</th></tr></thead>
        <tbody>
          @if (loading()) { <tr><td colspan="5" class="text-center py-4" style="color:#94a3b8;"><span class="spinner-border spinner-border-sm"></span> Loading…</td></tr> }
          @for (o of paged(); track o.id) {
            <tr>
              <td class="mono">{{ o.code }}</td>
              <td class="fw-semibold">{{ o.name }}</td>
              <td>{{ o.country || '—' }}</td>
              <td><vx-status-badge [label]="o.status" [status]="o.status" /></td>
              <td class="text-end">
                <button class="btn btn-sm btn-outline-secondary me-1" (click)="edit(o)"><i class="bi bi-pencil"></i></button>
                <button class="btn btn-sm btn-outline-danger" (click)="remove(o)"><i class="bi bi-trash"></i></button>
              </td>
            </tr>
          }
          @if (!loading() && filtered().length===0) { <tr><td colspan="5" class="text-center py-4" style="color:#94a3b8;">No organizations match your filter.</td></tr> }
        </tbody>
      </table>
    </div>
    <vx-pagination [totalItems]="filtered().length" [pageSize]="pageSize" [currentPage]="page()" (pageChange)="page.set($event)" />
  `,
  styles: ['.mono{font-family:ui-monospace,monospace;}']
})
export class OrganizationComponent implements OnInit {
  items = signal<Organization[]>([]);
  loading = signal(false);
  saving = signal(false);
  showForm = signal(false);
  editingId = signal<number | null>(null);
  searchQuery = signal('');
  page = signal(1);
  pageSize = 5;

  filtered = computed(() => {
    const q = this.searchQuery().trim().toLowerCase();
    if (!q) return this.items();
    return this.items().filter(o =>
      o.code.toLowerCase().includes(q) || o.name.toLowerCase().includes(q) || (o.country ?? '').toLowerCase().includes(q)
    );
  });
  paged = computed(() => this.filtered().slice((this.page() - 1) * this.pageSize, this.page() * this.pageSize));

  form = this.fb.group({
    code: ['', Validators.required],
    name: ['', Validators.required],
    country: [''],
    address: [''],
    status: ['ACTIVE']
  });
  constructor(private fb: FormBuilder, private service: OrganizationService, private toast: ToastService, private confirm: ConfirmDialogService) {}
  ngOnInit() { this.load(); }
  load() {
    this.loading.set(true);
    this.service.list().subscribe({
      next: res => { this.items.set(res.data.content); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }
  toggleForm() { this.showForm.update(v => !v); if (!this.showForm()) { this.form.reset({ status: 'ACTIVE' }); this.editingId.set(null); } }
  edit(o: Organization) {
    this.editingId.set(o.id);
    this.showForm.set(true);
    this.form.patchValue({ code: o.code, name: o.name, country: o.country ?? '', address: o.address ?? '', status: o.status });
  }
  save() {
    if (this.form.invalid) { this.toast.error('Code and name are required.'); return; }
    this.saving.set(true);
    const body = this.form.value as Partial<Organization>;
    const req$ = this.editingId() ? this.service.update(this.editingId()!, body) : this.service.create(body);
    req$.subscribe({
      next: () => { this.saving.set(false); this.toast.success('Saved.'); this.toggleForm(); this.load(); },
      error: () => this.saving.set(false)
    });
  }
  async remove(o: Organization) {
    if (!(await this.confirm.confirm({ message: `Delete organization "${o.name}"? This cannot be undone.`, danger: true, confirmLabel: 'Delete' }))) return;
    this.service.delete(o.id).subscribe({
      next: () => { this.toast.success('Deleted.'); this.load(); },
      error: () => {}
    });
  }
}
