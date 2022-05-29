import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from '../candidate.model';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate-detail',
  templateUrl: './candidate-detail.component.html',
  styleUrls: ['./candidate-detail.component.scss']
})
export class CandidateDetailComponent implements OnInit {
  @Input() candidate: Candidate;

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
  }

  onAddToInterviewList(){
    this.candidateService.addInterviewsToInterviewList(this.candidate.interviews);
  }

}
