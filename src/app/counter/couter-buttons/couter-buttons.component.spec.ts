import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouterButtonsComponent } from './couter-buttons.component';

describe('CouterButtonsComponent', () => {
  let component: CouterButtonsComponent;
  let fixture: ComponentFixture<CouterButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouterButtonsComponent]
    });
    fixture = TestBed.createComponent(CouterButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
