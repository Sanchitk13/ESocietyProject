import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscribable, NEVER } from 'rxjs'
import { HttpHeaders } from '@angular/common/http';
import { CustomAuth } from './CustomClass/custom-auth';
import { CustomAuthReturn, ReturnClass } from './CustomClass/custom-auth-return';
@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  http: HttpClient;
  url: string = 'http://localhost:60241/api/Auth';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
 
  constructor(http: HttpClient) {
    this.http = http;
   }

   Login(es:CustomAuth):Observable<ReturnClass>{
     return this.http.post<ReturnClass>(this.url,es,this.httpOptions)
   }

  

}
