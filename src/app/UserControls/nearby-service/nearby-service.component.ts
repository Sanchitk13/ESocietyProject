import { Component, NgZone, OnInit } from '@angular/core';
import {NearServiceService} from 'src/app/near-service.service';
import {CustomNear} from 'src/app/CustomClass/custom-near';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nearby-service',
  templateUrl: './nearby-service.component.html',
  styleUrls: ['./nearby-service.component.css']
})
export class NearbyServiceComponent implements OnInit {

  NBS:NearServiceService;
  result:CustomNear[];
  id:number;
  ngZone:NgZone;
  router:Router;
  NB=new CustomNear();
  constructor(NBS:NearServiceService,ngZone:NgZone,router:Router) 
  { 
    this.NBS=NBS;
    this.ngZone=ngZone;
    this.router=router;
  }

   showed:boolean;


  ngOnInit(): void {
    this.ShowService();
   
    this.showed=false;
  }
  Show():void{
    this.showed=false;
    this.ShowService()
  }
 
  ShowService():void{
    this.NBS.GetServices().subscribe((data:CustomNear[])=>{
      this.result=data;
    });
  }
}