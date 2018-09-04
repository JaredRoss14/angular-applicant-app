import { Component, OnInit, Input } from '@angular/core';
import { ApplicantClass } from '../../applicant/applicant.model';
import { ApplicantService } from '../../applicant/applicant.service';

@Component({
  selector: 'app-favorite-panel',
  templateUrl: './favorite-panel.component.html',
  styleUrls: ['./favorite-panel.component.css']
})
export class FavoritePanelComponent implements OnInit {
  @Input() applicant = ApplicantClass;
  @Input() favorited: boolean;

  constructor(private applicantService: ApplicantService) { }

  unFavorite(applicant) {
    applicant.favorited = false;
  }

  update(applicant) {
    this.applicantService.updateApplicant(applicant).subscribe(evt => console.log('updated!'));
  }

  onClick(applicant) {
    this.unFavorite(applicant);
    this.update(applicant);
  }

  ngOnInit() {

  }

}
