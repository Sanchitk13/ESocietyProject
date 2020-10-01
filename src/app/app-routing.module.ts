import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunctionCategoryComponent } from './function-category/function-category.component';
import { HouseComponent } from './house/house.component';
import { ServiceComponent } from './service/service.component';
import { NearServiceCategoryComponent } from './near-service-category/near-service-category.component';
import { FunctionDetailsComponent } from './function-details/function-details.component';
import { OwnerComponent } from './owner/owner.component';
import { GuardDutyComponent } from './guard-duty/guard-duty.component';
import { ParkingDetailsComponent } from './parking-details/parking-details.component';
import { AdditionalFacilityDetailsComponent } from './additional-facility-details/additional-facility-details.component';
import { SocietyComponent } from './society/society.component';
import { NearServiceComponent } from './near-service/near-service.component';
import { UserServiceComponent } from './user-service/user-service.component';
import { NearbyServiceComponent } from './UserControls/nearby-service/nearby-service.component';
import { NearbyCategoryComponent } from './UserControls/nearby-category/nearby-category.component';
import { ServiceCategoryComponent } from './UserControls/service-category/service-category.component';
import { FunctionCatComponent } from './UserControls/function-cat/function-cat.component';
import { UserGivenServicesComponent } from './UserControls/user-given-services/user-given-services.component';
import { MyGuardGuard } from './my-guard.guard';
import { UserGuardGuard } from './user-guard.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './UserControls/user-home/user-home.component';
import { FunctionDetComponent } from './UserControls/function-det/function-det.component';
import { ContactComponent } from './contact/contact.component';
import { AdditionalfacSerComponent } from './UserControls/additionalfac-ser/additionalfac-ser.component'



const routes: Routes = [
  {path: 'FunctionCategory', component: FunctionCategoryComponent,canActivate: [MyGuardGuard]},
  {path: 'House', component: HouseComponent,canActivate: [MyGuardGuard]},
  {path: 'Service', component: ServiceComponent,canActivate: [MyGuardGuard]},
  {path: 'NearService', component: NearServiceCategoryComponent,canActivate: [MyGuardGuard]},
  {path: 'FunctionDetails', component: FunctionDetailsComponent,canActivate: [MyGuardGuard]},
  {path: 'OwnerRes', component: OwnerComponent,canActivate: [MyGuardGuard]},
  {path: 'Guard', component: GuardDutyComponent,canActivate: [MyGuardGuard]},
  {path: 'Parking', component: ParkingDetailsComponent,canActivate: [MyGuardGuard]},
  {path: 'Additional', component: AdditionalFacilityDetailsComponent,canActivate: [MyGuardGuard]},
  {path: 'Society', component: SocietyComponent,canActivate: [MyGuardGuard]},
  {path: 'NearBy', component: NearServiceComponent,canActivate: [MyGuardGuard]},
  {path: 'AdminHome', component: HomeComponent,canActivate: [MyGuardGuard]},
  {path: 'EmerContact', component: ContactComponent,canActivate: [MyGuardGuard]},
  {path: 'UserService', component: UserServiceComponent,canActivate: [MyGuardGuard]},
  {path: 'UserNearby', component: NearbyServiceComponent,canActivate: [UserGuardGuard]},
  {path: 'UserNearCat', component: NearbyCategoryComponent,canActivate: [UserGuardGuard]},
  {path: 'UserServiceCat', component: ServiceCategoryComponent,canActivate: [UserGuardGuard]},
  {path: 'UserFunctionCat', component: FunctionCatComponent,canActivate: [UserGuardGuard]},
  {path: 'UserGivenService', component: UserGivenServicesComponent,canActivate: [UserGuardGuard]},
  {path: 'UserFunctionDet', component: FunctionDetComponent,canActivate: [UserGuardGuard]},
  {path: 'UserAddService', component: AdditionalfacSerComponent,canActivate: [UserGuardGuard]},

  {path:'Home',component:UserHomeComponent,canActivate:[UserGuardGuard]},
  {path:'Login',component:LoginComponent},

  {path:'',redirectTo:'/Login',pathMatch:'full'},
  { path: '**', component:PageNotFoundComponent},
  
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
