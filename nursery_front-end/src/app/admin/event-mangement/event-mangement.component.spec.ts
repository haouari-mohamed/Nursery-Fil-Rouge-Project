import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMangementComponent } from './event-mangement.component';

describe('EventMangementComponent', () => {
  let component: EventMangementComponent;
  let fixture: ComponentFixture<EventMangementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventMangementComponent]
    });
    fixture = TestBed.createComponent(EventMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
