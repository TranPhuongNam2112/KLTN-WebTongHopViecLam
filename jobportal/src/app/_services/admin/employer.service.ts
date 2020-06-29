import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  // private url = 'http://localhost:8080/api/admin/getAllEmployers';
  private gettAllEmployerURL = '/api/users/employers';
  private detailurl='/api/users/employers';
  constructor(private http: HttpClient) { }
  gettAllEmployer (pageNo: number)
  {
   return this.http.get(`${this.gettAllEmployerURL}`+'?pageNo='+pageNo);  
  }
  getEmployerId(id: number): Observable<any> {
    return this.http.get(`${this.detailurl}/${id}`);
  }
}
