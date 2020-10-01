import { Component, NgZone, OnInit } from '@angular/core';
import {AdditionalServiceService} from "src/app/additional-service.service";
import { CustomAdditional} from "src/app/CustomClass/custom-additional";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additional-facility-details',
  templateUrl: './additional-facility-details.component.html',
  styleUrls: ['./additional-facility-details.component.css']
})
export class AdditionalFacilityDetailsComponent implements OnInit {

  afs:AdditionalServiceService;
  result:CustomAdditional[];

  AFD =new CustomAdditional();
  
  id:number;
  ngZone:NgZone;
  router:Router;

  insert:boolean;
  showed:boolean;
  update:boolean;

    insertfacility=new FormGroup({   
    fname:new FormControl('',[Validators.required]),
    add:new FormControl('',[Validators.required]),
    cont:new FormControl('',[Validators.required]),
    avail:new FormControl('',[Validators.required]),
    charges:new FormControl('',[Validators.required]),
  });

  updatefacility=new FormGroup({   
    fid:new FormControl('',[Validators.required]),
    fname:new FormControl('',[Validators.required]),
    add:new FormControl('',[Validators.required]),
    cont:new FormControl('',[Validators.required]),
    avail:new FormControl('',[Validators.required]),
    charges:new FormControl('',[Validators.required]),
  });
  
  constructor(afs:AdditionalServiceService,ngZone:NgZone,router:Router)
   {
      this.afs=afs;
      this.ngZone=ngZone;
      this.router=router;
   }



   ngOnInit(): void {
    this.ShowFacility();
    this.insert=true;
    this.showed=false;
    this.update=true;
  }
  
  show():void{
    this.insert=true;
    this.showed=false;
    this.update=true;
    this.ShowFacility()
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

  ShowFacility():void{
    this.afs.GetAdditionalFacilityDetails().subscribe((data:CustomAdditional[])=>{
      this.result=data;
    });
  }
  InsertFacility():void{
    console.log(this.insertfacility.value);
   this.AFD.Facility_Name=this.insertfacility.controls.fname.value;
   this.AFD.Facility_Address=this.insertfacility.controls.add.value;
   this.AFD.Facility_Contact=this.insertfacility.controls.cont.value;
   this.AFD.Facility_Availability=this.insertfacility.controls.avail.value;
   this.AFD.Facility_Charges=this.insertfacility.controls.charges.value;
   
   console.log(this.AFD);
   this.afs.PostAdditionalFacilityDetails(this.AFD).subscribe(data =>{
     alert("data inserted");
    
   });
   window.location.reload();
  }
  SelectByID():void{
    this.id=this.updatefacility.controls.fid.value;
   // console.log(this.id);
    this.afs.GetByAdditionalFacilityDetails(this.id).subscribe((data:CustomAdditional)=>{
  this.AFD=data;
  console.log(this.AFD);
    });
  }
  UpdateFacility():void{
    console.log(this.updatefacility.value);
     this.AFD.Facility_Name=this.updatefacility.controls.fname.value;
     this.AFD.Facility_Address=this.updatefacility.controls.add.value;
     this.AFD.Facility_Contact=this.updatefacility.controls.cont.value;
     this.AFD.Facility_Availability=this.updatefacility.controls.avail.value;
     this.AFD.Facility_Charges=this.updatefacility.controls.charges.value;
    this.afs.PutAdditionalFacilityDetails(this.id,this.AFD).subscribe((data:string)=>{
    console.log(this.AFD);
    alert("data updated");
      
    });
    window.location.reload();
  }
}