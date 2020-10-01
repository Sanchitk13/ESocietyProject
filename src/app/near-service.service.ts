import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { CustomNear } from 'src/app/CustomClass/custom-near';
@Injectable({
  providedIn: 'root'
})
export class NearServiceService {
  http:HttpClient;
  NB:CustomNear;
  url: string='http://localhost:60241/api/NearbyServices';
 
  constructor(http:HttpClient)
   {
        this.http=http;
   }
   httpOPtions={headers :new HttpHeaders({
    'Content-Type' : 'application/json'
  }) 
}
GetServices():Observable<CustomNear[]>{
  return this.http.get<CustomNear[]>(this.url);
}
GetByNearServiceId(id:number):Observable<CustomNear>{
  return this.http.get<CustomNear>(this.url+"/"+id);
}
PostServices(NB:CustomNear):Observable<string>{
  return this.http.post<string>(this.url,NB,this.httpOPtions);
}
PutServices(id:number,NB:CustomNear):Observable<number>{
  return this.http.put<number>(this.url+"/"+id,NB,this.httpOPtions);
}
  }


