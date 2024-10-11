import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSupervisorDialogComponent } from './register-supervisor-dialog.component';

describe('RegisterSupervisorDialogComponent', () => {
  let component: RegisterSupervisorDialogComponent;
  let fixture: ComponentFixture<RegisterSupervisorDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterSupervisorDialogComponent]
    });
    fixture = TestBed.createComponent(RegisterSupervisorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
