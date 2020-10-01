import { Component, NgZone, OnInit } from '@angular/core';
import {AdditionalServiceService} from "src/app/additional-service.service";
import { CustomAdditional} from "src/app/CustomClass/custom-additional";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-additionalfac-ser',
  templateUrl: './additionalfac-ser.component.html',
  styleUrls: ['./additionalfac-ser.component.css']
})
export class AdditionalfacSerComponent implements OnInit {

  afs:AdditionalServiceService;
  result:CustomAdditional[];

  AFD =new CustomAdditional();
  
  id:number;
  ngZone:NgZone;
  router:Router;

  showed:boolean;
 

    
  
  constructor(afs:AdditionalServiceService,ngZone:NgZone,router:Router)
   {
      this.afs=afs;
      this.ngZone=ngZone;
      this.router=router;
   }



   ngOnInit(): void {
    this.ShowFacility();
    this.showed=false;
  }
  
  show():void{
    this.showed=false;
    this.ShowFacility()
  }

  ShowFacility():void{
    this.afs.GetAdditionalFacilityDetails().subscribe((data:CustomAdditional[])=>{
      this.result=data;
    });
  }
}