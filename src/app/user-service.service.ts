import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CustomUser } from './CustomClass/custom-user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  
  private url:string = "http://localhost:60241/api/UserServiceDetails";

  http:HttpClient;
  

  constructor(http:HttpClient) {
    this.http = http;
   }

  httpOptions ={headers : new HttpHeaders({
    'Content-Type' : 'application/json'
    })
  }

  GetAllUserSeviceDetails():Observable<CustomUser[]>{
    return this.http.get<CustomUser[]>(this.url);
  }

  GetByIdUserServiceDetails(id:number):Observable<CustomUser>{
    return this.http.get<CustomUser>(this.url+"/"+id);
  }

  PutUserServiceDetails(id:number,cs:CustomUser):Observable<string>{
    return this.http.put<string>(this.url+"/"+id,cs,this.httpOptions);
  }

  PostUserServiceDetails(cs:CustomUser):Observable<boolean>{
    return this.http.post<boolean>(this.url,cs,this.httpOptions);
  }

}

