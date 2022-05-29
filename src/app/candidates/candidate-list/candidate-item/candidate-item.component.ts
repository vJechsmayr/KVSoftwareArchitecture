import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from '../../candidate.model';
import { CandidateService } from '../../candidate.service';

@Component({
  selector: 'app-candidate-item',
  templateUrl: './candidate-item.component.html',
  styleUrls: ['./candidate-item.component.scss']
})
export class CandidateItemComponent implements OnInit {
  @Input() candidate: Candidate;
  
  constructor(private candidateService: CandidateService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.candidateService.candidateSelected.emit(this.candidate);
  }

}
