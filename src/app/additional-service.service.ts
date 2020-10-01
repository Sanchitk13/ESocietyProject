import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CustomAdditional } from './CustomClass/custom-additional';

@Injectable({
  providedIn: 'root'
})
export class AdditionalServiceService {
  AFD:CustomAdditional;
  http:HttpClient;
  url:string='http://localhost:60241/api/AdditionalFacilityDetails';
  httpOPtions={headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
};
  constructor(http:HttpClient) 
  { 
     this.http=http;
  }

  GetAdditionalFacilityDetails():Observable<CustomAdditional[]>{
    return this.http.get<CustomAdditional[]>(this.url);
  }
  GetByAdditionalFacilityDetails(id:number):Observable<CustomAdditional>{
    return this.http.get<CustomAdditional>(this.url+"/"+id);

  }
 PostAdditionalFacilityDetails( AFD:CustomAdditional ):Observable<Boolean>{
    return this.http.post<Boolean>(this.url,AFD,this.httpOPtions);
  }
  PutAdditionalFacilityDetails(id:number,AFD:CustomAdditional):Observable<string>{
    return this.http.put<string>(this.url+"/"+id,AFD,this.httpOPtions);
  }
 
  }

