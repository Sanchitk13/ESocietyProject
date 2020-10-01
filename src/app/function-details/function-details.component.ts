import { Component, NgZone, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { CustomFunctionDetails } from 'src/app/CustomClass/custom-function-details';
import { FunctionDetailsServiceService } from 'src/app/function-details-service.service';

@Component({
  selector: 'app-function-details',
  templateUrl: './function-details.component.html',
  styleUrls: ['./function-details.component.css']
})
export class FunctionDetailsComponent implements OnInit {

  srv:FunctionDetailsServiceService;
  result:CustomFunctionDetails[];
  res = new CustomFunctionDetails();
  resUp = new CustomFunctionDetails();
  id:number;
  ngZone:NgZone;
  router:Router;

  constructor(srv:FunctionDetailsServiceService,ngzone:NgZone,router:Router) {
    this.srv = srv;
    this.ngZone = ngzone;
    this.router = router;
   }


  inser:boolean;
  showed:boolean;
  updat:boolean;


 ngOnInit(): void {
   this.ShowAllDetails();
   this.inser=true; 
   this.showed = false;
   this.updat = true;
 }

 show():void{
   this.inser=true; 
   this.showed = false;
   this.updat = true;
   this.ShowAllDetails()
 }

 insert():void{
   this.inser=false; 
   this.showed = true;
   this.updat = true;
 }

 update():void{
   this.inser=true; 
   this.showed = true;
   this.updat = false;
 }

 ShowAllDetails():void{
   this.srv.GetFunctionDetails().subscribe((data:CustomFunctionDetails[])=>{
    this.result = data;
   })
 }

 InsertDetails():void{
   this.srv.PostFunctionDetails(this.res).subscribe((data:boolean)=>{
     if(data){
       alert("Details Inserted");
     }
     window.location.reload();
   })
 }

 getbyId(id:number):void{
   this.id = id;
    this.srv.GetByIdFunctionDetails(this.id).subscribe((data:CustomFunctionDetails)=>{
      this.resUp = data;
    })
 }

 updateDetails():void{
   this.srv.PutFunctionDetails(this.id,this.resUp).subscribe((data:string)=>{
     alert(data);
     window.location.reload();
   })
 }

}
