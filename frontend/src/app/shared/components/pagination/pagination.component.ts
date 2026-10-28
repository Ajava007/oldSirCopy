import { Component, EventEmitter, Input, Output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vx-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
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
