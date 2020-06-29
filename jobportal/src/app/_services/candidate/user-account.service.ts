import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserAccountService {
  private getProfileurl = '/candidate/myprofile';
  private createExperienceURL='/candidate/myprofile/addExperience';
  private deleteExperienceURL='/candidate/myprofile/experience/remove';

  private createEducationURL='/candidate/myprofile/addEducation';
  private deleteEducationURL='/candidate/myprofile/education/remove';
  private updateProfileURL ='/candidate/myprofile';
  private getJobTypeURL= '/candidate/jobtypes';
  constructor(private http: HttpClient) { }
 
  getJobTypes(): Observable<any> {
    return this.http.get(`${this.getJobTypeURL}`);
  }
  getAccounts(): Observable<any> {
    return this.http.get(`${this.getProfileurl}`);
  }
  deleteExperience(id: number): Observable<any> {
    return this.http.delete(`${this.deleteExperienceURL}/${id}`, { responseType: 'text' });
  }
  deleteEducation(id: number): Observable<any> {
    return this.http.delete(`${this.deleteEducationURL}/${id}`, { responseType: 'text' });
  }
  createExperience(ex: Object): Observable<Object> {
    return this.http.post(`${this.createExperienceURL}`, ex,{ responseType: 'text' });
  }
  // updateExperience(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.updateurl}/${id}`, value);
  // }
  createEducation(edu: Object): Observable<Object> {
    return this.http.post(`${this.createEducationURL}`, edu,{ responseType: 'text' });
  }
  updateProfile(value: any): Observable<Object> {
    return this.http.put(`${this.updateProfileURL}`, value, { responseType: 'text' });
  }
}
