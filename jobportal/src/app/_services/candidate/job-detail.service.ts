import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobDetailService {
  private jobPostDetailURL='/candidate/jobposts';
  constructor(private http: HttpClient) { }
  getJobPostDetail(id: number): Observable<any> {
    return this.http.get(`${this.jobPostDetailURL}/${id}`);
  }
}
