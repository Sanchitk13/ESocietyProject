import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomOwner } from 'src/app/CustomClass/custom-owner';
import { OwnerServiceService } from 'src/app/owner-service.service';
@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {

  result:CustomOwner[];
  res = new CustomOwner();
  resUp = new CustomOwner();
  srv:OwnerServiceService;
  id:number;
  ngZone:NgZone;
  router:Router;

  constructor(srv:OwnerServiceService,ngzone:NgZone,router:Router) {
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
 this.srv.GetOwnerRegistration().subscribe((data:CustomOwner[])=>{
   this.result = data;
 })
 }

 InsertDetails():void{
  this.srv.PostOwnerRegistration(this.res).subscribe((data:boolean)=>{
    if(data)
    {
      alert("data Inserted");
    }
    window.location.reload();
  })
 }

 getbyId(id:number):void{
   this.id = id;
   this.srv.GetByIdOwnerRegistration(this.id).subscribe((data:CustomOwner)=>{
     this.resUp = data;
   })
 }

 OwnerUpdate():void{
   this.srv.PutOwnerRegistration(this.id,this.resUp).subscribe((data:string)=>{
    alert(data);
    window.location.reload();
   })
 }

}
