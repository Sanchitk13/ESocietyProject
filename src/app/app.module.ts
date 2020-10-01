import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FunctionCategoryComponent } from './function-category/function-category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
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
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { NearbyServiceComponent } from './UserControls/nearby-service/nearby-service.component';
import { NearbyCategoryComponent } from './UserControls/nearby-category/nearby-category.component';
import { ServiceCategoryComponent } from './UserControls/service-category/service-category.component';
import { FunctionCatComponent } from './UserControls/function-cat/function-cat.component';
import { UserGivenServicesComponent } from './UserControls/user-given-services/user-given-services.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserNavBarComponent } from './user-nav-bar/user-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './UserControls/user-home/user-home.component';
import { FunctionDetComponent } from './UserControls/function-det/function-det.component';
import { ContactComponent } from './contact/contact.component';
import { CheckAuthGuardServiceService } from './check-auth-guard-service.service';
import { AdditionalfacSerComponent } from './UserControls/additionalfac-ser/additionalfac-ser.component'

@NgModule({
  declarations: [
    AppComponent,
    FunctionCategoryComponent,
    NavbarComponent,
    HouseComponent,
    ServiceComponent,
    NearServiceCategoryComponent,
    FunctionDetailsComponent,
    OwnerComponent,
    GuardDutyComponent,
    ParkingDetailsComponent,
    AdditionalFacilityDetailsComponent,
    SocietyComponent,
    NearServiceComponent,
    UserServiceComponent,
    UserNavbarComponent,
    NearbyServiceComponent,
    NearbyCategoryComponent,
    ServiceCategoryComponent,
    FunctionCatComponent,
    UserGivenServicesComponent,
    LoginComponent,
    PageNotFoundComponent,
    UserNavBarComponent,
    HomeComponent,
    UserHomeComponent,
    FunctionDetComponent,
    ContactComponent,
    AdditionalfacSerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    CheckAuthGuardServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
