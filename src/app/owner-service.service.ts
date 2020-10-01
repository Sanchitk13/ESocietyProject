import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import {CustomOwner} from './CustomClass/custom-owner'


@Injectable({
  providedIn: 'root'
})
export class OwnerServiceService {

  private url:string = "http://localhost:60241/api/OwnerRegistration";

  http:HttpClient;
  

  constructor(http:HttpClient) {
    this.http = http;
   }

  httpOptions ={headers : new HttpHeaders({
    'Content-Type' : 'application/json'
    })
  }

  GetOwnerRegistration():Observable<CustomOwner[]>{
    return this.http.get<CustomOwner[]>(this.url);
  }

  GetByIdOwnerRegistration(id:number):Observable<CustomOwner>{
    return this.http.get<CustomOwner>(this.url+"/"+id);
  }

  PutOwnerRegistration(id:number,cs:CustomOwner):Observable<string>{
    return this.http.put<string>(this.url+"/"+id,cs,this.httpOptions);
  }

  PostOwnerRegistration(cs:CustomOwner):Observable<boolean>{
    return this.http.post<boolean>(this.url,cs,this.httpOptions);
  }

}

