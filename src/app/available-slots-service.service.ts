import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, observable} from 'rxjs';

import {HttpHeaders} from '@angular/common/http';

import { CustomAvailableSlots } from "src/app/CustomClass/custom-available-slots";

@Injectable({
  providedIn: 'root'
})
export class AvailableSlotsServiceService {

  as : CustomAvailableSlots;
  http: HttpClient;
  private url = 'http://localhost:60241/api/AvailableSlots';
  httpOptions = {headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
  constructor(http:HttpClient) {
    this.http = http;
   }

   // TO GET ALL THE SLOTS
   GetAllAvailableSlots():Observable<CustomAvailableSlots[]>
   {
     return this.http.get<CustomAvailableSlots[]>(this.url);
   }
}
