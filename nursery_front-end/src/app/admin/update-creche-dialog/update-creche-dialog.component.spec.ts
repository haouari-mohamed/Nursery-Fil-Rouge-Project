import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCrecheDialogComponent } from './update-creche-dialog.component';

describe('UpdateCrecheDialogComponent', () => {
  let component: UpdateCrecheDialogComponent;
  let fixture: ComponentFixture<UpdateCrecheDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCrecheDialogComponent]
    });
    fixture = TestBed.createComponent(UpdateCrecheDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
