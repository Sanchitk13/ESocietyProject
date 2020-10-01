import { Component, NgZone, OnInit } from '@angular/core';
import {FormsModule,FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms';

import { CustomParking } from "src/app/CustomClass/custom-parking";

import { CustomAvailableSlots } from "src/app/CustomClass/custom-available-slots";
 
import {ParkingServiceService} from "src/app/parking-service.service";

import {Router} from '@angular/router';

import { AvailableSlotsServiceService } from 'src/app/available-slots-service.service';

@Component({
  selector: 'app-parking-details',
  templateUrl: './parking-details.component.html',
  styleUrls: ['./parking-details.component.css']
})
export class ParkingDetailsComponent implements OnInit {
  slots:CustomAvailableSlots[];
  res:CustomParking[];
  svc:ParkingServiceService;
  svc1:AvailableSlotsServiceService;
  pd = new CustomParking();
  pd1 = new CustomParking();
  
  ngZone : NgZone;
  router : Router;
  id:number;
  display:boolean;
  insert:boolean;
  update:boolean;
  
  constructor(svc:ParkingServiceService,ngZone : NgZone,router : Router,svc1:AvailableSlotsServiceService) {
    this.svc = svc;
    this.svc1 = svc1;
    this.ngZone = ngZone;
    this.router = router;
  }

  ngOnInit(): void {
    this.display = false;
    this.insert = true;
    this.update = true;
    this.DisplayAllVisitorsParking();
    this.svc1.GetAllAvailableSlots().subscribe((data:CustomAvailableSlots[])=>{
      this.slots = data;
    });
  }

  // INSERT FORM
  newparking = new FormGroup({
    vehno:new FormControl('',[Validators.required]),
    vid:new FormControl('',[Validators.required]),
    sid:new FormControl('',[Validators.required])
  });

  // UPDATE FORM
  updateparking = new FormGroup({
    id:new FormControl('',[Validators.required]),
    vehno:new FormControl(),
    vid:new FormControl(),
    //sid:new FormControl('',[Validators.required])

  });

  Display():void
  {
    this.display = false;
    this.insert = true;
    this.update = true;
  }

  Insert():void
  {
    this.display = true;
    this.insert = false;
    this.update = true;
  }

  Update():void
  {
    this.display = true;
    this.insert = true;
    this.update = false;
  }

  // DISPLAYING PARKING METHODS
  DisplayAllVisitorsParking():void
  {
    this.svc.ViewAllParkingDetails().subscribe((data:CustomParking[])=>{
      this.res = data;
    });
  }

  // INSERTING PARKING METHODS
  AddNewParking():void
  {
    if(this.newparking.controls.sid.value=='select')
    {
      alert("enter Correct details");
    }
    else{
      this.pd.Vechile_Number = this.newparking.controls.vehno.value;
      this.pd.Visitor_ID = this.newparking.controls.vid.value;
      this.pd.Parking_Slot = this.newparking.controls.sid.value;
  
  
      this.svc.InsertNewParking(this.pd).subscribe((data:boolean)=>{
        if(data){
          alert("New Visitor Entered with Parking Slot " + this.pd.Parking_Slot );
        }
        
      });
  
      //window.location.reload();
    }
   
  }

  // UPDATING PARKING METHODS


  SearchParking(id:number):void
  {
    this.id = id;
    
    this.svc.ViewSelectedVisitor(this.id).subscribe((data:CustomParking)=>{
      this.pd1 = data;
    });
  }

  UpdateParking():void
  {
    console.log(this.pd1);
    this.svc.UpdateVisitorParking(this.id,this.pd1).subscribe((data:string)=>{
      if(data != "")
      {
        alert("Parking of " + this.pd1.Parking_ID + " updated");
        window.location.reload();
      }
      
    });

    

  }



}
