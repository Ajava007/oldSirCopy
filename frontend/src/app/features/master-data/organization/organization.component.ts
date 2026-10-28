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
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
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
