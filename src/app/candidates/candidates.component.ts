import { Component, OnInit } from '@angular/core';
import { Candidate } from './candidate.model';
import { CandidateService } from './candidate.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss'],
  providers: [ CandidateService ]
})
export class CandidatesComponent implements OnInit {
  selectedCandidate:Candidate;

  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
    this.candidateService.candidateSelected.subscribe((candidate: Candidate) => {
      this.selectedCandidate = candidate;
    })

  }

}
