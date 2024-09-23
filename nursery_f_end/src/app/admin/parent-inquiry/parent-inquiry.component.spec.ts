import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentInquiryComponent } from './parent-inquiry.component';

describe('ParentInquiryComponent', () => {
  let component: ParentInquiryComponent;
  let fixture: ComponentFixture<ParentInquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentInquiryComponent]
    });
    fixture = TestBed.createComponent(ParentInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
