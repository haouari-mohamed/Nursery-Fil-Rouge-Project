import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurserySearchComponent } from './nursery-search.component';

describe('NurserySearchComponent', () => {
  let component: NurserySearchComponent;
  let fixture: ComponentFixture<NurserySearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NurserySearchComponent]
    });
    fixture = TestBed.createComponent(NurserySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
