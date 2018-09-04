import { Component, OnInit, Input } from '@angular/core';
import { ApplicantClass } from '../../applicant/applicant.model';

@Component({
  selector: 'app-favorite-applicants',
  templateUrl: './favorite-applicants.component.html',
  styleUrls: ['./favorite-applicants.component.css']
})
export class FavoriteApplicantsComponent implements OnInit {
  @Input() applicants: ApplicantClass[];

  constructor() { }

  ngOnInit() {
  }

}
