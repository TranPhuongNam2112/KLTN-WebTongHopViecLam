import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AllJoblistService {
  private gettAllJobListURL = '/home/alljobposts';
  private deleteurl='candidate/savedjobposts';
  private getsaveJobPosturl = '/candidate/savedjobposts';
  private test = '/candidate/savedjobposts';
  private savejobpostURL='/candidate/savejobpost';
  private getRecommendJobPostURL = '/candidate/recommendedjobposts';
  private getRecommendJobPostNoPageURL = '/candidate/recommendedjobposts';
  private getTopViewedJobpostsURL = '/home/topviewedjobposts';
  private getHotCrawledJobpostURL = '/home/hotjobposts';
  constructor(private http: HttpClient) { }
 
  getHotCrawledJobpost(pageNo: number): Observable<any> {
    return this.http.get(`${this.getHotCrawledJobpostURL}`+'?pageNo='+pageNo);
  }
  getTopViewedJobposts ()
  {
   return this.http.get(`${this.getTopViewedJobpostsURL}`);  
  }
  getRecommendJobPost (pageNo: number)
  {
   return this.http.get(`${this.getRecommendJobPostURL}`+'?pageNo='+pageNo);  
  }
  getRecommendJobPostNoPage ()
  {
   return this.http.get(`${this.getRecommendJobPostNoPageURL}`);  
  }
  getSaveJobPost (pageNo: number)
  {
   return this.http.get(`${this.getsaveJobPosturl}`+'?pageNo='+pageNo);  
  }
  getSaveJobPostTest ()
  {
   return this.http.get(this.test);  
  }
  gettAllJobList (pageNo: number)
  {
   return this.http.get(`${this.gettAllJobListURL}`+'?pageNo='+pageNo);  
  }
  saveJobPost(id: number): Observable<any> {
    return this.http.post(`${this.savejobpostURL}/${id}`,id, { responseType: 'text' });
  }
  deleteSaveJobPost(id: number): Observable<any> {
    return this.http.delete(`${this.deleteurl}/${id}`, { responseType: 'text' });
  }
   
}
