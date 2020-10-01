import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomNearServiceCategory } from 'src/app/CustomClass/custom-near-service-category';
import { NearServiceCategoryServiceService } from 'src/app/near-service-category-service.service';
import {FormControl,FormGroup,FormsModule,FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-near-service-category',
  templateUrl: './near-service-category.component.html',
  styleUrls: ['./near-service-category.component.css']
})
export class NearServiceCategoryComponent implements OnInit {

  res: any;
  svc:NearServiceCategoryServiceService;
  gd = new CustomNearServiceCategory();
  ngZone : NgZone;
  router : Router;
  id:number = 0;

  show:boolean;
  insert:boolean;
  update:boolean;

  constructor(svc: NearServiceCategoryServiceService,ngZone: NgZone, router: Router) { 
    this.svc = svc;
    this.ngZone = ngZone;
    this.router = router;
  }

  newnearservice = new FormGroup({
    name:new FormControl('',[Validators.required]),
  });

  updatenearservice = new FormGroup({
    id:new FormControl('',[Validators.required]),
    name:new FormControl('',[Validators.required])
  
  });

  ngOnInit(): void {
    this.show = false;
    this.insert = true;
    this.update = true;
    this.ShowAllCategory();
  }

  Show():void
  {
    this.show = false;
    this.insert = true;
    this.update = true;
  }

  Insert():void
  {
    this.show = true;
    this.insert = false;
    this.update = true;
  }

  Update():void
  {
    this.show = true;
    this.insert = true;
    this.update = false;
  }

  ShowAllCategory():void{
    this.svc.GetNearServiceCategory().subscribe((data:CustomNearServiceCategory)=>{
      this.res = data;
    });
    //console.log(this.result);
  }

  AddNewnearservice():void{
    this.gd.Nearby_Services_Category = this.newnearservice.controls.name.value;
    console.log(this.gd);
    this.svc.PostNearServiceCategory(this.gd).subscribe(data=>{
      console.log(data);
      alert("Data Inserted");
    window.location.reload();
  });
}
  SearchNearService():void{
    this.id = this.updatenearservice.controls.id.value;
    this.svc.GetByIDNearServiceCategory(this.id).subscribe((data: CustomNearServiceCategory)=>{
      this.gd = data;
    });
   
    }
    UpdatenearService():void
    {
      this.gd.Nearby_Services_Category = this.updatenearservice.controls.name.value;
      this.svc.PutNearServiceCategory(this.id,this.gd).subscribe((data:string) => {
        console.log(data);
        alert(data);
      });
        window.location.reload();
        }
}