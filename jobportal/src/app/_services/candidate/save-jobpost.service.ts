import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SaveJobpostService {
  private saveJobPosturl = '/candidate/savedjobposts';
  private deleteurl='/candidate/savedjobposts';
  constructor(private http: HttpClient) { }
  getSaveJobPost (pageNo: number)
  {
   return this.http.get(`${this.saveJobPosturl}`+'?pageNo='+pageNo);  
  }
  deleteSaveJobPost(id: number): Observable<any> {
    return this.http.delete(`${this.deleteurl}/${id}`, { responseType: 'text' });
  }
   
}
