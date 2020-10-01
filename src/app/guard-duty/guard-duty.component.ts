import { Component, NgZone, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormsModule,FormBuilder, Validators} from '@angular/forms';
import { CustomGuard } from "src/app/CustomClass/custom-guard";
import {GuardServiceService} from "src/app/guard-service.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-guard-duty',
  templateUrl: './guard-duty.component.html',
  styleUrls: ['./guard-duty.component.css']
})
export class GuardDutyComponent implements OnInit {

  res: CustomGuard [];
  svc:GuardServiceService;
  gd = new CustomGuard();
  ngZone : NgZone;
  router : Router;
  id:number = 0;

  display:boolean;
  insert:boolean;
  update:boolean;

  constructor(svc:GuardServiceService,ngZone : NgZone,router : Router) { 
    this.svc = svc;
    this.ngZone = ngZone;
    this.router = router;
  }

  // INSERT FORM

  newvisitor = new FormGroup({
    name:new FormControl('',[Validators.required]),
    entry:new FormControl('',[Validators.required]),
    exit:new FormControl(),
    details:new FormControl('',[Validators.required]),
    hid:new FormControl('',[Validators.required]),
    require:new FormControl('',[Validators.required]),
    
  });

  // UPDATE FORM

  updatevisitor = new FormGroup({
    id:new FormControl('',[Validators.required]),
    name:new FormControl(),
    entry:new FormControl(),
    exit:new FormControl(),
    details:new FormControl(),
    hid:new FormControl(),
    require:new FormControl(),
  });

  ngOnInit(): void {
    this.display = false;
    this.insert = true;
    this.update = true;
    this.DisplayAllVisitors();
  }

  Display():void
  {
    this.display = false;
    this.insert = true;
    this.update = true;
  }

  Insert():void
  {
    this.display = true;
    this.insert = false;
    this.update = true;
  }

  Update():void
  {
    this.display = true;
    this.insert = true;
    this.update = false;
  }

  // SHOW METHOD

  DisplayAllVisitors():void
  {
    this.svc.ViewAllVisitors().subscribe((data:CustomGuard[])=>{
      this.res = data;
    });
  }

  // INSERT METHOD
  AddNewVisitor():void
  {
    this.gd.Visitor_Name = this.newvisitor.controls.name.value;
    this.gd.In_Datetime = this.newvisitor.controls.entry.value;
    this.gd.Out_Datetime = this.newvisitor.controls.exit.value;
    this.gd.Details = this.newvisitor.controls.details.value;
    this.gd.House_ID = this.newvisitor.controls.hid.value;
    this.gd.Require = this.newvisitor.controls.require.value;

    console.log(this.gd);

    this.svc.InsertNewVisitor(this.gd).subscribe(data=>{
      console.log(data);
      alert("New Visitor Entered in " + this.gd.House_ID + " house" );
    });

    if(this.gd.Require == 1)
      {
        this.ngZone.run(()=>this.router.navigateByUrl('/Parking'));
      }
      else
      {
        window.location.reload();
      }
    
  }

 /* if(this.updatevisitor.controls.require.value == 1)
      {
        this.ngZone.run(()=>this.router.navigateByUrl('parking'));
      }*/

    // UPDATE METHOD

    SearchVisitor():void
    {
      this.id = this.updatevisitor.controls.id.value;
      this.svc.ViewSelectedVisitor(this.id).subscribe((data:CustomGuard)=>{
        this.gd = data;
      });
    }
  
    UpdateVisitor():void
    {
      this.id = this.updatevisitor.controls.id.value;
      this.gd.Out_Datetime = this.updatevisitor.controls.exit.value;
  
      this.svc.UpdateVisitor(this.id,this.gd).subscribe(data=>{
        console.log(data);
        alert("Visitor of house " + this.gd.House_ID + " exitted from the society");
      });

      window.location.reload();
      
    }
  

}
