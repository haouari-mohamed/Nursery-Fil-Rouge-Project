import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseryProfileComponent } from './nursery-profile.component';

describe('NurseryProfileComponent', () => {
  let component: NurseryProfileComponent;
  let fixture: ComponentFixture<NurseryProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NurseryProfileComponent]
    });
    fixture = TestBed.createComponent(NurseryProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
