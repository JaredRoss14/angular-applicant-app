import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { ApplicantClass } from '../applicant/applicant.model';
import { ApplicantService } from '../applicant/applicant.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
  providers: [ApplicantService]
})
export class SearchPageComponent implements OnInit {

  applicants: ApplicantClass[];
  
  searchField: FormControl
  searchForm: FormGroup;

  applicant: ApplicantClass;

  favorite(applicant) {
    applicant.favorited = true;
  }

  update(applicant) {
    this.applicantService.updateApplicant(applicant).subscribe(evt => console.log('updated!'));
  }

  onClick(applicant) {
    this.favorite(applicant);
    this.update(applicant);
  }

  constructor(private applicantService: ApplicantService) { }

  ngOnInit() {
    this.applicantService.getApplicants()
      .subscribe(
        applicants => this.applicants = applicants
      )
  }

}