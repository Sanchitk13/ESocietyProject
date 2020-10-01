import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomFunctionCategory } from 'src/app/CustomClass/custom-function-category';
import { FunctionCategoryServiceService } from 'src/app/function-category-service.service';


@Component({
  selector: 'app-function-category',
  templateUrl: './function-category.component.html',
  styleUrls: ['./function-category.component.css']
})
export class FunctionCategoryComponent implements OnInit {

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
    this.srv.GetFunctionCategory().subscribe((data:CustomFunctionCategory[])=>{
      this.result = data;
    }) 
  }

  InsertCategory():void{
    this.srv.PostFunctionCategory(this.res).subscribe((data:boolean)=>{
      if(data){
        alert("Data Inserted");
      } 
      window.location.reload();
    }) 
  }

  getbyId(id:number):void{
    this.id = id;
    this.srv.GetByIdFunctionCategory(this.id).subscribe((data:CustomFunctionCategory)=>{
      this.upt = data;
    })
  }
 
  updateCategory(){
    this.srv.PutFunctionCategory(this.id,this.upt).subscribe((data:string)=>{
      alert(data);
      window.location.reload();
    })
  }


}
