import { Interview } from '../shared/interview.model';
import { EventEmitter } from '@angular/core';

export class InterviewListService {
    interviewsChanged = new EventEmitter<Interview[]>();
  private interviews: Interview[] = [
    new Interview("Erstgespräch Kalchgruber","3.6. 12:00","Büro Linz"),
    new Interview("Teammeeting Glaser","1.6.22 11:30","epunkt GmbH Linz"),
  ];

  getInterviews() {
    return this.interviews.slice();
  }

  addInterview(interview: Interview) {
    this.interviews.push(interview);
    this.interviewsChanged.emit(this.interviews.slice());
  }

  addInterviews(interviews: Interview[]) {
    // for (let i of interviews) {
    //   this.addInterview(i);
    // }
    this.interviews.push(...interviews);
    this.interviewsChanged.emit(this.interviews.slice());
  }
}
