import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Interview } from 'src/app/shared/interview.model';
import { InterviewListService } from '../interview-list.service';

@Component({
  selector: 'app-interview-list-edit',
  templateUrl: './interview-list-edit.component.html',
  styleUrls: ['./interview-list-edit.component.scss']
})
export class InterviewListEditComponent implements OnInit {
  @ViewChild('nameInput', { static:false }) nameInputRef: ElementRef;
  @ViewChild('dateInput', { static: false }) dateInputRef: ElementRef;
  @ViewChild('placeInput', { static: false }) placeInputRef: ElementRef;

  constructor(private ilService: InterviewListService) { }

  ngOnInit(): void {
  }
  
  onAddItem(){
    const interviewName = this.nameInputRef.nativeElement.value;
    const interviewDate = this.dateInputRef.nativeElement.value;
    const interviewPlace = this.placeInputRef.nativeElement.value;
    const newInterview = new Interview(interviewName, interviewDate, interviewPlace);

    this.ilService.addInterview(newInterview);

  };

}
