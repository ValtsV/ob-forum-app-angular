import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinButtonComponent } from './pin-button.component';

describe('PinButtonComponent', () => {
  let component: PinButtonComponent;
  let fixture: ComponentFixture<PinButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
