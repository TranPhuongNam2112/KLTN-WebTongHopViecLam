import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrawledJoblistService {
  private crawledJobPostURL='/home/otherwebsites/alljobposts';
  private getAllIndustryURL = '/candidate/industries';
  constructor(private http: HttpClient) { }
  getCrawledJobPost(websitename: string): Observable<any> {
    return this.http.get(`${this.crawledJobPostURL}/${websitename}`);
  }
  getOtherWebs(websitename: string, pageNo: number): Observable<any> {
    return this.http.get(`${this.crawledJobPostURL}/${websitename}`+'?pageNo='+pageNo);
  }
  getAllIndustries(): Observable<any> {
    return this.http.get(`${this.getAllIndustryURL}`);
  }
}
