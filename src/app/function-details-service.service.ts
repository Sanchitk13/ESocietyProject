import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { CustomFunctionDetails } from './CustomClass/custom-function-details';

@Injectable({
  providedIn: 'root'
})
export class FunctionDetailsServiceService {

  
  private url:string = "http://localhost:60241/api/FunctionDetails";

  http:HttpClient;
  fd:CustomFunctionDetails;

  constructor(http:HttpClient) {
    this.http = http;
   }

  httpOptions ={headers : new HttpHeaders({
    'Content-Type' : 'application/json'
    })
  }

  GetFunctionDetails():Observable<CustomFunctionDetails[]>{
    return this.http.get<CustomFunctionDetails[]>(this.url);
  }

  GetByIdFunctionDetails(id:number):Observable<CustomFunctionDetails>{
    return this.http.get<CustomFunctionDetails>(this.url+"/"+id);
  }

  PutFunctionDetails(id:number,fd:CustomFunctionDetails):Observable<string>{
    return this.http.put<string>(this.url+"/"+id,fd,this.httpOptions);
  }

  PostFunctionDetails(fd:CustomFunctionDetails):Observable<boolean>{
    return this.http.post<boolean>(this.url,fd,this.httpOptions);
  }
}

