import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomServiceCategory } from 'src/app/CustomClass/custom-service-category';
import { ServiceCategoryServiceService } from 'src/app/service-category-service.service';
import {FormControl,FormGroup,FormsModule,FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-service-category',
  templateUrl: './service-category.component.html',
  styleUrls: ['./service-category.component.css']
})
export class ServiceCategoryComponent implements OnInit {

  res: any;
  svc:ServiceCategoryServiceService;
  gd = new CustomServiceCategory();
  ngZone : NgZone;
  router : Router;
  id:number = 0;

  show:boolean;
 

  constructor(svc: ServiceCategoryServiceService,ngZone: NgZone, router: Router) { 
    this.svc = svc;
    this.ngZone = ngZone;
    this.router = router;
  }

  

  ngOnInit(): void {
    this.show = false;
    this.ShowAllCategory();
  }

  Show():void
  {
    this.show = false;
  }

 
  ShowAllCategory():void{
    this.svc.GetServiceCategory().subscribe((data:CustomServiceCategory)=>{
      this.res = data;
    });
    //console.log(this.result);
  }

}