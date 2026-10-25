import { Component, EventEmitter, Input, Output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vx-pagination',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-3">
      <span class="small" style="color:#64748b;">Showing {{ from() }}–{{ to() }} of {{ totalItems }} items</span>
      <div class="btn-group btn-group-sm">
        <button class="btn btn-outline-secondary" [disabled]="currentPage===1" (click)="go(1)"><i class="bi bi-chevron-double-left"></i></button>
        <button class="btn btn-outline-secondary" [disabled]="currentPage===1" (click)="go(currentPage-1)"><i class="bi bi-chevron-left"></i></button>
        @for (p of pages(); track p) {
          <button class="btn" [class.btn-primary]="p===currentPage" [class.btn-outline-secondary]="p!==currentPage" (click)="go(p)">{{ p }}</button>
        }
        <button class="btn btn-outline-secondary" [disabled]="currentPage===totalPages()" (click)="go(currentPage+1)"><i class="bi bi-chevron-right"></i></button>
        <button class="btn btn-outline-secondary" [disabled]="currentPage===totalPages()" (click)="go(totalPages())"><i class="bi bi-chevron-double-right"></i></button>
      </div>
    </div>
  `
})
export class PaginationComponent {
  @Input({ required: true }) totalItems = 0;
  @Input() pageSize = 5;
  @Input() currentPage = 1;
  @Output() pageChange = new EventEmitter<number>();

  totalPages = computed(() => Math.max(1, Math.ceil(this.totalItems / this.pageSize)));
  from = computed(() => (this.currentPage - 1) * this.pageSize + 1);
  to = computed(() => Math.min(this.currentPage * this.pageSize, this.totalItems));

  pages() {
    const t = this.totalPages();
    const c = this.currentPage;
    const start = Math.max(1, Math.min(c - 1, t - 2));
    const end = Math.min(t, start + 2);
    const arr: number[] = [];
    for (let i = start; i <= end; i++) arr.push(i);
    return arr;
  }

  go(p: number) {
    if (p < 1 || p > this.totalPages() || p === this.currentPage) return;
    this.pageChange.emit(p);
  }
}
