import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardheadComponent } from './dashboardhead.component';

describe('DashboardheadComponent', () => {
  let component: DashboardheadComponent;
  let fixture: ComponentFixture<DashboardheadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardheadComponent]
    });
    fixture = TestBed.createComponent(DashboardheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
