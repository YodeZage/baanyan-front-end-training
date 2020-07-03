import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPracticeComponent } from './first-practice.component';

describe('FirstPracticeComponent', () => {
  let component: FirstPracticeComponent;
  let fixture: ComponentFixture<FirstPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
