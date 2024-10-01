import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCrecheDialogComponent } from './add-creche-dialog.component';

describe('AddCrecheDialogComponent', () => {
  let component: AddCrecheDialogComponent;
  let fixture: ComponentFixture<AddCrecheDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCrecheDialogComponent]
    });
    fixture = TestBed.createComponent(AddCrecheDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
