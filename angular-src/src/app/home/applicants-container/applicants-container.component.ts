import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApplicantService } from '../../applicant/applicant.service';
import { ApplicantClass } from '../../applicant/applicant.model';

@Component({
  selector: 'app-applicants-container',
  templateUrl: './applicants-container.component.html',
  styleUrls: ['./applicants-container.component.css'],
  providers: [ApplicantService]
})
  
export class ApplicantsContainerComponent implements OnInit {

  applicants: ApplicantClass[];
  public generalApplications = [];
  public favoriteApplications = [];

  constructor(private applicantService: ApplicantService) { }

  ngOnInit() {
    const favoritedApplicants$ = this.applicantService.getApplicants();
    const generalApplicants$ = this.applicantService.getApplicants();

    favoritedApplicants$
      .pipe(
      map(favoriteApplications => favoriteApplications.filter(a => a.favorited === true)))
      .subscribe(
      favoriteApplications => this.favoriteApplications = favoriteApplications,
    )
    
    generalApplicants$
      .pipe(
        map(generalApplications => generalApplications.filter(a => a.favorited === false)))
      .subscribe(generalApplications => this.generalApplications = generalApplications);
  }
  }