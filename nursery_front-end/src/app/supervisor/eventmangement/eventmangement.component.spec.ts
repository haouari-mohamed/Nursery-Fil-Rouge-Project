import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventmangementComponent } from './eventmangement.component';

describe('EventmangementComponent', () => {
  let component: EventmangementComponent;
  let fixture: ComponentFixture<EventmangementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventmangementComponent]
    });
    fixture = TestBed.createComponent(EventmangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
