import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CandidatesComponent } from './candidates/candidates.component';
import { CandidateListComponent } from './candidates/candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './candidates/candidate-detail/candidate-detail.component';
import { CandidateItemComponent } from './candidates/candidate-list/candidate-item/candidate-item.component';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { InterviewListEditComponent } from './interview-list/interview-list-edit/interview-list-edit.component';
import { HeaderComponent } from './header/header.component';
import { InterviewListService } from './interview-list/interview-list.service';

@NgModule({
  declarations: [
    AppComponent,
    CandidatesComponent,
    CandidateListComponent,
    CandidateDetailComponent,
    CandidateItemComponent,
    InterviewListComponent,
    InterviewListEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [ InterviewListService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
