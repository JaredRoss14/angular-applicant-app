import { Component, OnInit, Input } from '@angular/core';
import { ApplicantClass } from '../../applicant/applicant.model';
import { ApplicantService } from '../../applicant/applicant.service';


@Component({
  selector: 'app-general-panel',
  templateUrl: './general-panel.component.html',
  styleUrls: ['./general-panel.component.css']
})
export class GeneralPanelComponent implements OnInit {
  @Input() applicant = ApplicantClass;
  @Input() favorited: boolean;

  constructor(private applicantService: ApplicantService) { }

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

  ngOnInit() {
  }

}
