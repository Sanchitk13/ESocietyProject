import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomFunctionCategory } from 'src/app/CustomClass/custom-function-category';
import { FunctionCategoryServiceService } from 'src/app/function-category-service.service';
@Component({
  selector: 'app-function-cat',
  templateUrl: './function-cat.component.html',
  styleUrls: ['./function-cat.component.css']
})
export class FunctionCatComponent implements OnInit {

  srv: FunctionCategoryServiceService;
  result: CustomFunctionCategory[];
  
  res = new CustomFunctionCategory();
  upt = new CustomFunctionCategory();
  ngZone:NgZone;
  router:Router;
  id :number;

  constructor(srv:FunctionCategoryServiceService,ngZone:NgZone,router:Router) {
    this.ngZone = ngZone;
    this.router = router;
    this.srv = srv;
   }

 
   showed:boolean;
   


  ngOnInit(): void {
    this.ShowAllCategory();
    this.showed = false;
  }

  show():void{
    this.showed = false;
    this.ShowAllCategory()
  }

  
  ShowAllCategory():void{
    this.srv.GetFunctionCategory().subscribe((data:CustomFunctionCategory[])=>{
      this.result = data;
    }) 
  }

 

}

