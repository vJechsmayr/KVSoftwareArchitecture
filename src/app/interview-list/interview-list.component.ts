import { Component, OnInit } from '@angular/core';
import { Interview } from '../shared/interview.model';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.scss']
})
export class InterviewListComponent implements OnInit {

  interviews: Interview[] = [
    new Interview("Internes Gespräch Fr.Glaser","02.Juni 2022 10:30","epunkt GmbH Linz"),
    new Interview("Internes Kennenlernen des Teams mit Fr. Kalchgruber","03.Juni 2022 8:15","epunkt GmbH Linz - FunCourt")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onInterviewAdded(interview: Interview){
    this.interviews.push(interview);
  }

}
