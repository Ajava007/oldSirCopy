import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let comp: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [PaginationComponent] }).compileComponents();
    fixture = TestBed.createComponent(PaginationComponent);
    comp = fixture.componentInstance;
    comp.totalItems = 23;
    comp.pageSize = 5;
    comp.currentPage = 1;
    fixture.detectChanges();
  });

  it('computes totalPages correctly', () => {
    expect(comp.totalPages()).toBe(5); // 23 / 5 = 4.6 → 5
  });

  it('computes from/to ranges', () => {
    expect(comp.from()).toBe(1);
    expect(comp.to()).toBe(5);
  });

  it('emits pageChange on go() and clamps invalid pages', () => {
    spyOn(comp.pageChange, 'emit');
    comp.go(3);
    expect(comp.pageChange.emit).toHaveBeenCalledWith(3);
    comp.go(0); // invalid, no emit
    comp.go(99); // invalid, no emit
    expect(comp.pageChange.emit).toHaveBeenCalledTimes(1);
  });

  it('shows at most 3 page numbers', () => {
    expect(comp.pages().length).toBeLessThanOrEqual(3);
  });
});
