import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMangementAdSupComponent } from './event-mangement-ad-sup.component';

describe('EventMangementAdSupComponent', () => {
  let component: EventMangementAdSupComponent;
  let fixture: ComponentFixture<EventMangementAdSupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventMangementAdSupComponent]
    });
    fixture = TestBed.createComponent(EventMangementAdSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
