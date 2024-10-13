import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartVisibleComponent } from './cart-visible.component';

describe('CartVisibleComponent', () => {
  let component: CartVisibleComponent;
  let fixture: ComponentFixture<CartVisibleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartVisibleComponent]
    });
    fixture = TestBed.createComponent(CartVisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
