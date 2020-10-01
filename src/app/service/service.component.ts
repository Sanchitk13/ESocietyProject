import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomServiceCategory } from 'src/app/CustomClass/custom-service-category';
import { ServiceCategoryServiceService } from 'src/app/service-category-service.service';
import {FormControl,FormGroup,FormsModule,FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  res: any;
  svc:ServiceCategoryServiceService;
  gd = new CustomServiceCategory();
  ngZone : NgZone;
  router : Router;
  id:number = 0;

  show:boolean;
  insert:boolean;
  update:boolean;

  constructor(svc: ServiceCategoryServiceService,ngZone: NgZone, router: Router) { 
    this.svc = svc;
    this.ngZone = ngZone;
    this.router = router;
  }

  newservice = new FormGroup({
    name:new FormControl('',[Validators.required]),
  });

  updateservice = new FormGroup({
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
    this.svc.GetServiceCategory().subscribe((data:CustomServiceCategory)=>{
      this.res = data;
    });
    //console.log(this.result);
  }

  AddNewservice():void{
    this.gd.Service_Category = this.newservice.controls.name.value;
    console.log(this.gd);
    this.svc.PostServiceCategory(this.gd).subscribe(data=>{
      console.log(data);
      alert("Data Inserted");
    window.location.reload();
  });
}
  SearchService():void{
    this.id = this.updateservice.controls.id.value;
    this.svc.GetByIDServiceCategory(this.id).subscribe((data: CustomServiceCategory)=>{
      this.gd = data;
    });
   
    }
    UpdateService():void
    {
      this.gd.Service_Category = this.updateservice.controls.name.value;
      this.svc.PutServiceCategory(this.id,this.gd).subscribe((data:string) => {
        console.log(data);
        alert(data);
      });
        window.location.reload();
        }
}