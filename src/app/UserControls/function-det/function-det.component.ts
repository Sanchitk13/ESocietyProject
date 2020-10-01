import { Component, NgZone, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { CustomFunctionDetails } from 'src/app/CustomClass/custom-function-details';
import { FunctionDetailsServiceService } from 'src/app/function-details-service.service';
@Component({
  selector: 'app-function-det',
  templateUrl: './function-det.component.html',
  styleUrls: ['./function-det.component.css']
})
export class FunctionDetComponent implements OnInit {

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
  


 ngOnInit(): void {
   
   this.inser=true; 
  
 }


 insert():void{
   this.inser=false; 
  
 }


 
 InsertDetails():void{
   this.srv.PostFunctionDetails(this.res).subscribe((data:boolean)=>{
     if(data){
       alert("Details Inserted");
     }
     window.location.reload();
   })
 }
}
