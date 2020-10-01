import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomAuth } from '../CustomClass/custom-auth';
import { CustomAuthReturn,ReturnClass } from '../CustomClass/custom-auth-return';
import { LoginserviceService } from '../loginservice.service';
import {FormGroup, FormBuilder,FormControl,Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ath:LoginserviceService;
  returnAuth = new ReturnClass();
  insertAuth = new CustomAuth();
  ngZone:NgZone;
  router:Router;
  

  constructor(ath:LoginserviceService,ngZone:NgZone,router:Router) {
    this.ngZone = ngZone;
    this.router = router;
    this.ath = ath;
   }

  ngOnInit(): void {
  }

  CheckLogin():void{
    if(this.insertAuth.type == 'Admin')
    {
      //console.log(this.insertAuth);
      this.ath.Login(this.insertAuth).subscribe((data:ReturnClass)=>{
        this.returnAuth = data;
        if(this.returnAuth.msg == true)
        {
          CustomAuthReturn.id = this.returnAuth.id;
          CustomAuthReturn.msg = this.returnAuth.msg;
          CustomAuthReturn.username = this.returnAuth.username;
          CustomAuthReturn.Usertype = this.insertAuth.type;
          localStorage.setItem('sessionUsertype',CustomAuthReturn.Usertype);
          localStorage.setItem('sessionUserName',CustomAuthReturn.username);
          localStorage.setItem('sessionUserId',CustomAuthReturn.id.toString());

          alert("Login Sucessfull");
          this.ngZone.run(() => this.router.navigateByUrl('/AdminHome'));
        }
        else{
          alert("Login Failed")
        }
        
      })
    }

    if(this.insertAuth.type == 'User')
    {
      //console.log(this.insertAuth);
      this.ath.Login(this.insertAuth).subscribe((data:ReturnClass)=>{
        this.returnAuth = data;
        if(this.returnAuth.msg == true)
        {
          CustomAuthReturn.id = this.returnAuth.id;
          CustomAuthReturn.msg = this.returnAuth.msg;
          CustomAuthReturn.username = this.returnAuth.username;
          CustomAuthReturn.Usertype = this.insertAuth.type;
          localStorage.setItem('sessionUser',CustomAuthReturn.Usertype);
          localStorage.setItem('sessionUserName',CustomAuthReturn.username);
          localStorage.setItem('sessionUserId',CustomAuthReturn.id.toString());


          alert("Login Sucessfull");
          this.ngZone.run(() => this.router.navigateByUrl('/Home'));
        }
        else{
          alert("Login Failed")
        }
      })
    }
  }

}
