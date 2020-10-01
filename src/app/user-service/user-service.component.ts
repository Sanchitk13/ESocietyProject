import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomUser } from 'src/app/CustomClass/custom-user';
import { UserServiceService } from 'src/app/user-service.service';


@Component({
  selector: 'app-user-service',
  templateUrl: './user-service.component.html',
  styleUrls: ['./user-service.component.css']
})
export class UserServiceComponent implements OnInit {

  
  srv: UserServiceService;
  result: CustomUser[];
  
  res = new CustomUser();
  upt = new CustomUser();
  ngZone:NgZone;
  router:Router;
  id :number;

  constructor(srv:UserServiceService,ngZone:NgZone,router:Router) {
    this.ngZone = ngZone;
    this.router = router;
    this.srv = srv;
   }

   inser:boolean;
   showed:boolean;
   updat:boolean;


  ngOnInit(): void {
    this.ShowAllCategory();
    this.inser=true; 
    this.showed = false;
    this.updat = true;
  }

  show():void{
    this.inser=true; 
    this.showed = false;
    this.updat = true;
    this.ShowAllCategory()
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

  ShowAllCategory():void{
    this.srv.GetAllUserSeviceDetails().subscribe((data:CustomUser[])=>{
      this.result = data;
    })
  }

  InserUserService():void{
    this.srv.PostUserServiceDetails(this.res).subscribe((data:boolean)=>{
      if(data)
      {
        alert("Data Inserted");
        window.location.reload();
      }
    })
  }


  ShowUserService(id:number){
    this.id = id;
    this.srv.GetByIdUserServiceDetails(this.id).subscribe((data:CustomUser)=>{
      this.upt = data;
    })
  }

  UpdateUserService():void{
    this.srv.PutUserServiceDetails(this.id,this.upt).subscribe((data:string)=>
    {
      alert(data);
      window.location.reload();
    })
  }

}
