import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {CustomParking} from 'src/app/CustomClass/custom-parking'
import {Observable} from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ParkingServiceService {

  http:HttpClient;
  url = 'http://localhost:60241/api/ParkingDetails';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
  constructor(http:HttpClient) {
    this.http = http;
   }

    // To Show All Parking Details of the society
    ViewAllParkingDetails():Observable<CustomParking[]>
    {
      return this.http.get<CustomParking[]>(this.url);
    }
 
    // To view the searched parking
    ViewSelectedVisitor(id:number):Observable<CustomParking>
    {
      return this.http.get<CustomParking>(this.url + "/" + id);
    }
 
    // To Insert new parking in the DB
    InsertNewParking(pd:CustomParking):Observable<boolean>
    {
      return this.http.post<boolean>(this.url,pd,this.httpOptions);
    }
 
    // To update Visitor Parking data
    UpdateVisitorParking(id:number,pd:CustomParking):Observable<string>
    {
      console.log(pd);
      return this.http.put<string>(this.url+"/"+id,pd,this.httpOptions);
    }
}
