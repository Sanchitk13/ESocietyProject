import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomNearServiceCategory } from 'src/app/CustomClass/custom-near-service-category';
import { NearServiceCategoryServiceService } from 'src/app/near-service-category-service.service';
import {FormControl,FormGroup,FormsModule,FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-nearby-category',
  templateUrl: './nearby-category.component.html',
  styleUrls: ['./nearby-category.component.css']
})
export class NearbyCategoryComponent implements OnInit {

  res: any;
  svc:NearServiceCategoryServiceService;
  gd = new CustomNearServiceCategory();
  ngZone : NgZone;
  router : Router;
  id:number = 0;

  show:boolean;
  

  constructor(svc: NearServiceCategoryServiceService,ngZone: NgZone, router: Router) { 
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
    this.svc.GetNearServiceCategory().subscribe((data:CustomNearServiceCategory)=>{
      this.res = data;
    });
    //console.log(this.result);
  }

}