import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SocialloginService {
  url;
  constructor(private http: HttpClient) { }
  loginGoogleCandidate(responce) {
    this.url = '/auth/loginGGForCandidate';
    return this.http.post(this.url, responce);
  }
 
  loginGoogleEmployer(responce) {
    this.url = '/auth/loginGGForEmployer';
    return this.http.post(this.url, responce);
  }
  loginFacebookCandidate(responce) {
    this.url = '/auth/loginFBForCandidate';
    return this.http.post(this.url, responce);
  }
 
  loginFacebookEmployer(responce) {
    this.url = '/auth/loginFBForEmployer';
    return this.http.post(this.url, responce);
  }
}
