import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchJobtypeService {
  private searchJobTypeURL = '/home';
  private searchIndustryURL = '/home/searchIndustryByName';
  constructor(private http: HttpClient) { }
  searchJobByJobType(jobtype: string): Observable<any> {
    return this.http.get(`${this.searchJobTypeURL}/${jobtype}`);
  }
  searchIndustry(industry: string): Observable<any> {
    return this.http.get(`${this.searchIndustryURL}/${industry}`);
  }

}
