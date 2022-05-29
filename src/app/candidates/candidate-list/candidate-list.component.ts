import { Component, OnInit } from '@angular/core';
import { Candidate } from '../candidate.model';
import { CandidateService } from '../candidate.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss']
})
export class CandidateListComponent implements OnInit {
  
  candidates: Candidate[];

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.candidates = this.candidateService.getCandidates();
  }



}
