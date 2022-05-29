import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewListEditComponent } from './interview-list-edit.component';

describe('InterviewListEditComponent', () => {
  let component: InterviewListEditComponent;
  let fixture: ComponentFixture<InterviewListEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewListEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewListEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
