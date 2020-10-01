import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { CustomFunctionCategory } from './CustomClass/custom-function-category'


@Injectable({
  providedIn: 'root'
})
export class FunctionCategoryServiceService {

  private url:string = "http://localhost:60241/api/FunctionCategory";

  http:HttpClient;
  fc:CustomFunctionCategory;

  constructor(http:HttpClient) {
    this.http = http;
   }

  httpOptions ={headers : new HttpHeaders({
    'Content-Type' : 'application/json'
    })
  }

  GetFunctionCategory():Observable<CustomFunctionCategory[]>{
    return this.http.get<CustomFunctionCategory[]>(this.url);
  }

  GetByIdFunctionCategory(id:number):Observable<CustomFunctionCategory>{
    return this.http.get<CustomFunctionCategory>(this.url+"/"+id);
  }

  PutFunctionCategory(id:number,fn:CustomFunctionCategory):Observable<string>{
    return this.http.put<string>(this.url+"/"+id,fn,this.httpOptions);
  }

  PostFunctionCategory(fn:CustomFunctionCategory):Observable<boolean>{
    return this.http.post<boolean>(this.url,fn,this.httpOptions);
  }

}

