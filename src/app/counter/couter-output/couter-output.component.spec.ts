import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouterOutputComponent } from './couter-output.component';

describe('CouterOutputComponent', () => {
  let component: CouterOutputComponent;
  let fixture: ComponentFixture<CouterOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouterOutputComponent]
    });
    fixture = TestBed.createComponent(CouterOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
