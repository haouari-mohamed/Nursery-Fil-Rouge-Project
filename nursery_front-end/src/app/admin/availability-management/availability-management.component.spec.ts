import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityManagementComponent } from './availability-management.component';

describe('AvailabilityManagementComponent', () => {
  let component: AvailabilityManagementComponent;
  let fixture: ComponentFixture<AvailabilityManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailabilityManagementComponent]
    });
    fixture = TestBed.createComponent(AvailabilityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
