import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseryDetailComponent } from './nursery-detail.component';

describe('NurseryDetailComponent', () => {
  let component: NurseryDetailComponent;
  let fixture: ComponentFixture<NurseryDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NurseryDetailComponent]
    });
    fixture = TestBed.createComponent(NurseryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
