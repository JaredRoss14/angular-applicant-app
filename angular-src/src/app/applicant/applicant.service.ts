import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';

import { Applicant } from './applicant.interface';

@Injectable()
export class ApplicantService {
  applicantsChanged = new Subject<Applicant[]>();
  ApplicantUpdated = new Subject<number>();

  constructor(private http: HttpClient) { }

  // GET applicants from server
  getApplicants(): Observable<Applicant[]> {
    return this.http.get<Applicant[]>('api/applicant')
  }

  // Update Applicant
  updateApplicant(updatedApplicant: Applicant): Observable<Applicant> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put<Applicant>(`api/applicant/${updatedApplicant._id}`, updatedApplicant, httpOptions)
  }

}
