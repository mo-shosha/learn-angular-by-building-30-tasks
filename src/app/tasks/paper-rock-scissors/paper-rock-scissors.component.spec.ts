import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperRockScissorsComponent } from './paper-rock-scissors.component';

describe('PaperRockScissorsComponent', () => {
  let component: PaperRockScissorsComponent;
  let fixture: ComponentFixture<PaperRockScissorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaperRockScissorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaperRockScissorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
