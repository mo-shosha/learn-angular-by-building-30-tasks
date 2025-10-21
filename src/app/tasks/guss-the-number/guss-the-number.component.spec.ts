import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GussTheNumberComponent } from './guss-the-number.component';

describe('GussTheNumberComponent', () => {
  let component: GussTheNumberComponent;
  let fixture: ComponentFixture<GussTheNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GussTheNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GussTheNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
