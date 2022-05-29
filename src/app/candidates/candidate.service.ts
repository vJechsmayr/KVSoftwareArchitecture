import { EventEmitter, Injectable } from '@angular/core';

import { Candidate } from './candidate.model';
import { Interview } from '../shared/interview.model';
import { InterviewListService } from '../interview-list/interview-list.service';

@Injectable()
export class CandidateService {
  candidateSelected = new EventEmitter<Candidate>();

  private candidates: Candidate[] = [
    new Candidate(
        "Viktoria", 
        "Jechsmayr", 
        "https://www.epunkt.com/uploads/imager/siteimages/Team/191020/viktoria-jechsmayr-2_ea8dac7d610097265aa9e3c99c2827be.jpg",
      [
        new Interview( "Onboarding Gespräch", "30.05.2022 8:30", "HomeOffice")
      ]),
    new Candidate(
        "Sarah",
        "Glaser",
        "https://www.epunkt.com/uploads/imager/siteimages/357559/Sarah_Glaser_2_ea8dac7d610097265aa9e3c99c2827be.jpg",
      [
        new Interview("Meeting Team", "30.05.2022 11:00", "Teams Call"),
        new Interview("Vertragsunterzeichnung", "01.06.2022 11:30", "epunkt GmbH Linz")
      ]),
      new Candidate(
            "Caroline",
            "Kalchgruber",
            "https://www.epunkt.com/uploads/imager/siteimages/Team/169682/caroline-kalchgruber-2_ea8dac7d610097265aa9e3c99c2827be.jpg",
        [
          new Interview("Erstgespräch Sourcing", "16.05.2022 16:42", "Ansprache LinkedIn"),
          new Interview("Internes Interview Recruiting", "18.05.2022 09:15", "Zoom Call"),
          new Interview("Kundeninterview xyz", "25.05.2022 10:00", "Undstraße 1")
        ])
  ];

  constructor(private ilService: InterviewListService) {}

  getCandidates() {
    return this.candidates.slice();
  }

  addInterviewsToInterviewList(interviews: Interview[]) {
    this.ilService.addInterviews(interviews);
  }
}
