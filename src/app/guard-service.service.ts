import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observer} from 'rxjs';

import {HttpHeaders} from '@angular/common/http';

import { CustomGuard } from './CustomClass/custom-guard';

import {Observable} from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class GuardServiceService {

  gd : CustomGuard;
  http: HttpClient;
  url = 'http://localhost:60241/api/GuardDuty';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
  constructor(http:HttpClient) {
    this.http = http;
   }

   // To Show All The Visitors of the society
   ViewAllVisitors():Observable<CustomGuard[]>
   {
     return this.http.get<CustomGuard[]>(this.url);
   }

   // To view the searched visitor 
   ViewSelectedVisitor(id:number):Observable<CustomGuard>
   {
     return this.http.get<CustomGuard>(this.url + "/" + id);
   }

   // To Insert a User in the DB
   InsertNewVisitor(gd:CustomGuard):Observable<string>
   {
     return this.http.post<string>(this.url,gd,this.httpOptions);
   }

   // To update Visitor data
   UpdateVisitor(id:number,gd):Observable<string>
   {
     return this.http.put<string>(this.url + "/" + id,gd,this.httpOptions);
   }
}
