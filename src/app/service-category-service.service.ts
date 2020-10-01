import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscribable, NEVER } from 'rxjs'
import { HttpHeaders } from '@angular/common/http';
import { CustomServiceCategory } from './CustomClass/custom-service-category';

@Injectable({
  providedIn: 'root'
})
export class ServiceCategoryServiceService {

  libservice: CustomServiceCategory;
  http: HttpClient;
  url: string = 'http://localhost:60241/api/ServiceCategory/';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
 
  constructor(http: HttpClient) {
    this.http = http;
   }
   GetServiceCategory(): Observable<CustomServiceCategory>{
     return this.http.get<CustomServiceCategory>(this.url);
   }
   GetByIDServiceCategory(id: number):Observable<CustomServiceCategory>{
     return this.http.get<CustomServiceCategory>(this.url + '/' + id);
   }
   PostServiceCategory(pc: CustomServiceCategory): Observable<string>{
     return this.http.post<string>(this.url, pc, this.httpOptions);
   }
   PutServiceCategory(id:number,fn:CustomServiceCategory):Observable<string>{
     return this.http.put<string>(this.url+"/"+id,fn,this.httpOptions);
   }
  }
  
  
