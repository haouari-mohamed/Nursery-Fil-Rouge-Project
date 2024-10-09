import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorinfoComponent } from './supervisorinfo.component';

describe('SupervisorinfoComponent', () => {
  let component: SupervisorinfoComponent;
  let fixture: ComponentFixture<SupervisorinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupervisorinfoComponent]
    });
    fixture = TestBed.createComponent(SupervisorinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
