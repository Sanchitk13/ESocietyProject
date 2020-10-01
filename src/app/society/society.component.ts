import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomSociety } from 'src/app/CustomClass/custom-society';
import { SocityServiceService } from 'src/app/socity-service.service';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {

  result: CustomSociety[];
  res = new CustomSociety;
  resUp = new CustomSociety;
  id:string;
  srv:SocityServiceService;
  ngZone:NgZone;
  router:Router;
 

  constructor(srv:SocityServiceService,ngZone:NgZone,router:Router) {
    this.ngZone = ngZone;
    this.router = router;
    this.srv = srv;
   }

   inser:boolean;
   showed:boolean;
   updat:boolean;


  ngOnInit(): void {
    this.ShowSociety();
    this.inser=true; 
    this.showed = false;
    this.updat = true;
  }

  show():void{
    this.inser=true; 
    this.showed = false;
    this.updat = true;
    this.ShowSociety()
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

  ShowSociety():void{
    this.srv.getSocitey().subscribe((data:CustomSociety[])=>{
      this.result = data;
    })
  }

  getByid(id:string):void{
    this.id = id;
    this.srv.getbyIdSocitey(this.id).subscribe((data:CustomSociety)=>{
      this.resUp = data;
    })
  }

  putSociety():void{
    this.srv.putSociety(this.id,this.resUp).subscribe((data:string)=>{
      alert(data);
      window.location.reload();
    })
  }

  postSociety():void{
    this.srv.postSociety(this.res).subscribe((data:boolean)=>{
      if(data)
      {
        alert("Data Inserted");
        window.location.reload();
      }
    })
  }

}

