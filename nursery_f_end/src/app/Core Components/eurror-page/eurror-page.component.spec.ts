import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EurrorPageComponent } from './eurror-page.component';

describe('EurrorPageComponent', () => {
  let component: EurrorPageComponent;
  let fixture: ComponentFixture<EurrorPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EurrorPageComponent]
    });
    fixture = TestBed.createComponent(EurrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
