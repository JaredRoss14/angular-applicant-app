import { Component, OnInit, Input } from '@angular/core';
import { ApplicantClass } from '../../applicant/applicant.model';

@Component({
  selector: 'app-general-applicants',
  templateUrl: './general-applicants.component.html',
  styleUrls: ['./general-applicants.component.css'],
})
export class GeneralApplicantsComponent implements OnInit {

  @Input() applicants: ApplicantClass[];

  constructor() { }

  ngOnInit() {
  };

}
