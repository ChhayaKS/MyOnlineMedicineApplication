import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediHomeComponent } from './medi-home.component';

describe('MediHomeComponent', () => {
  let component: MediHomeComponent;
  let fixture: ComponentFixture<MediHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediHomeComponent]
    });
    fixture = TestBed.createComponent(MediHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
