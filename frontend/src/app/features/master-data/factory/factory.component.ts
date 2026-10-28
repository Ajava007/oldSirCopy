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
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
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
