import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = "http://localhost:3000/employee";

  constructor(private http : HttpClient) { }

  employeeDetails(){
    return this.http.get(this.baseUrl);
  }

  employeeAddress(){
   return this.http.get(this.baseUrl+"Address");
  }

  employeePhone(){
    return this.http.get(this.baseUrl+"phone_emails")
  }
}
