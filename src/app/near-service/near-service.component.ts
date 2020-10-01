import { Component, NgZone, OnInit } from '@angular/core';
import {NearServiceService} from 'src/app/near-service.service';
import {CustomNear} from 'src/app/CustomClass/custom-near';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-near-service',
  templateUrl: './near-service.component.html',
  styleUrls: ['./near-service.component.css']
})
export class NearServiceComponent implements OnInit {

  NBS:NearServiceService;
  result:CustomNear[];
  Service=new FormGroup({
    Nearby_Services_ID:new FormControl('',[Validators.required]),
    Nearby_Services_Category_ID:new FormControl('',[Validators.required]),
    Nearby_Services_Name:new FormControl('',[Validators.required]),
    Nearby_Services_Contact:new FormControl('',[Validators.required]),
    Nearby_Services_Address:new FormControl('',[Validators.required]),
    Nearby_Services_Distance:new FormControl('',[Validators.required]),
    Nearby_Services_Details:new FormControl('',[Validators.required]),
  });

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

  insert:boolean;
   showed:boolean;
   update:boolean;

  ngOnInit(): void {
    this.ShowService();
    this.insert=true;
    this.showed=false;
    this.update=true;
  }
  show():void{
    this.insert=true;
    this.showed=false;
    this.update=true;
    this.ShowService()
  }
  insertt():void{
    this.insert=false;
    this.showed=true;
    this.update=true;
  }
  updatee():void{
    this.insert=true;
    this.showed=true;
    this.update=false;
  }
  ShowService():void{
    this.NBS.GetServices().subscribe((data:CustomNear[])=>{
      this.result=data;
    });
  }
InsertService():void{
  console.log(this.Service.value);
  
   this.NB.Nearby_Services_Category_ID=this.Service.controls.Nearby_Services_Category_ID.value;
    this.NB.Nearby_Services_Name=this.Service.controls.Nearby_Services_Name.value;
    this.NB.Nearby_Services_Contact=this.Service.controls.Nearby_Services_Contact.value;
    this.NB.Nearby_Services_Address=this.Service.controls.Nearby_Services_Address.value;
    this.NB.Nearby_Services_Distance=this.Service.controls.Nearby_Services_Distance.value;
    this.NB.Nearby_Services_Details=this.Service.controls.Nearby_Services_Details.value;

    console.log(this.NB);
    this.NBS.PostServices(this.NB).subscribe(data=>{
      alert("data inserted");
    });

    window.location.reload();
}

SelectByID():void{
  this.id=this.Service.controls.Nearby_Services_ID.value;
  this.NBS.GetByNearServiceId(this.id).subscribe((data:CustomNear)=>{
    this.NB=data;
    console.log(this.NB);
  });
}

 UpdateService():void{
   console.log(this.Service.value);
   this.NB.Nearby_Services_Category_ID=this.Service.controls.Nearby_Services_Category_ID.value;
   this.NB.Nearby_Services_Name=this.Service.controls.Nearby_Services_Name.value;
   this.NB.Nearby_Services_Contact=this.Service.controls.Nearby_Services_Contact.value;
   this.NB.Nearby_Services_Address=this.Service.controls.Nearby_Services_Address.value;
   this.NB.Nearby_Services_Distance=this.Service.controls.Nearby_Services_Distance.value;
   this.NB.Nearby_Services_Details=this.Service.controls.Nearby_Services_Details.value;
 this.NBS.PutServices(this.id,this.NB).subscribe((data:number)=>{
  
   alert("data updated");
 });
 window.location.reload();
 }
}

