import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomUser } from 'src/app/CustomClass/custom-user';
import { UserServiceService } from 'src/app/user-service.service';
@Component({
  selector: 'app-user-given-services',
  templateUrl: './user-given-services.component.html',
  styleUrls: ['./user-given-services.component.css']
})
export class UserGivenServicesComponent implements OnInit {

  result:CustomUser[];
  res = new CustomUser();
  resUp = new CustomUser();
  srv:UserServiceService;
  id:number;
  ngZone:NgZone;
  router:Router;

  constructor(srv:UserServiceService,ngzone:NgZone,router:Router) {
    this.srv = srv;
    this.ngZone = ngzone;
    this.router = router;
   }


  show:boolean;
  


 ngOnInit(): void {
   this.ShowAllDetails();
   this.show=true; 
  
 }

 Show():void{
   this.show=true; 
   this.ShowAllDetails()
 }

 
 ShowAllDetails():void{
 this.srv.GetAllUserSeviceDetails().subscribe((data:CustomUser[])=>{
   this.result = data;
 })
 }

}
