import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorProfileComponent } from './supervisor-profile.component';

describe('SupervisorProfileComponent', () => {
  let component: SupervisorProfileComponent;
  let fixture: ComponentFixture<SupervisorProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupervisorProfileComponent]
    });
    fixture = TestBed.createComponent(SupervisorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
