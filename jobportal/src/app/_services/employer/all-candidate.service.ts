import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AllCandidateService {
  private gettAllCandidateURL = '/employer/candidates';
  private saveCandidateURL='/employer/save';
  private deleteSavedCandidateURL='/employer/savedcandidates';
  private getSavedCandidateuURL = '/employer/savedcandidates';
  private getRecommendCandidateuURL = '/employer/recommendedcandidates';
  constructor(private http: HttpClient) { }
 
  gettAllCandidate (pageNo: number)
  {
   return this.http.get(`${this.gettAllCandidateURL}`+'?pageNo='+pageNo);  
  }
  getRecommendCandidate (pageNo: number)
  {
   return this.http.get(`${this.getRecommendCandidateuURL}`+'?pageNo='+pageNo);  
  }
  saveCandidate(id: number): Observable<any> {
    return this.http.post(`${this.saveCandidateURL}/${id}`,id, { responseType: 'text' });
  }
  getSavedCandidate (pageNo: number)
  {
   return this.http.get(`${this.deleteSavedCandidateURL}`+'?pageNo='+pageNo);  
  }
  getSavedCandidatehihi ()
  {
   return this.http.get(`${this.deleteSavedCandidateURL}`);  
  }
  deleteSavedCandidate(id: number): Observable<any> {
    return this.http.delete(`${this.getSavedCandidateuURL}/${id}`, { responseType: 'text' });
  }
}
