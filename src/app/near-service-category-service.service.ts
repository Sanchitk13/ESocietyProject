import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscribable, NEVER } from 'rxjs'
import { HttpHeaders } from '@angular/common/http';
import { CustomNearServiceCategory } from './CustomClass/custom-near-service-category';

@Injectable({
  providedIn: 'root'
})
export class NearServiceCategoryServiceService {
  housie: CustomNearServiceCategory;
  http: HttpClient;
  url: string = 'http://localhost:60241/api/NearbyServicesCategory/';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
  };
 
  constructor(http: HttpClient) {
    this.http = http;
   }
   GetNearServiceCategory(): Observable<CustomNearServiceCategory>{
     return this.http.get<CustomNearServiceCategory>(this.url);
   }
   GetByIDNearServiceCategory(id: number):Observable<CustomNearServiceCategory>{
     return this.http.get<CustomNearServiceCategory>(this.url + '/' + id);
   }
   PostNearServiceCategory(pc: CustomNearServiceCategory): Observable<string>{
     return this.http.post<string>(this.url, pc, this.httpOptions);
   }
   PutNearServiceCategory(id:number,fn:CustomNearServiceCategory):Observable<string>{
     return this.http.put<string>(this.url+"/"+id,fn,this.httpOptions);
   }
  }
  
  

