import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFilterListComponent } from './dynamic-filter-list.component';

describe('DynamicFilterListComponent', () => {
  let component: DynamicFilterListComponent;
  let fixture: ComponentFixture<DynamicFilterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFilterListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
