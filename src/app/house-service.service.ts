import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/observable';
import { HouseCustom } from './CustomClass/house-custom';

@Injectable({
  providedIn: 'root'
})
export class HouseServiceService {
  private url:string = "http://localhost:60241/api/HouseDetails";

  http:HttpClient;
  

  constructor(http:HttpClient) {
    this.http = http;
   }

  httpOptions ={headers : new HttpHeaders({
    'Content-Type' : 'application/json'
    })
  }

  getHouses():Observable<HouseCustom[]>{
   return this.http.get<HouseCustom[]>(this.url);
  }

  getbyIdHouse(id:string):Observable<HouseCustom>{
    return this.http.get<HouseCustom>(this.url+"/"+id);
  }

  postHouse(h:HouseCustom):Observable<boolean>{
    return this.http.post<boolean>(this.url,h,this.httpOptions);
  }

  putHouse(id:string,h:HouseCustom):Observable<string>{
    return this.http.put<string>(this.url+"/"+id,h,this.httpOptions);
  }

}
