import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckAuthGuardServiceService } from './check-auth-guard-service.service';
import { CustomAuthReturn } from './CustomClass/custom-auth-return';

@Injectable({
  providedIn: 'root'
})
export class MyGuardGuard implements CanActivate {
  router:Router;
  constructor(router:Router,private CheckAuthGuardService:CheckAuthGuardServiceService){this.router = router}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.CheckAuthGuardService.getToken()){
        return this.router.navigateByUrl('/404');
      }
      else{
        return this.CheckAuthGuardService.getToken();
      }
  }
  }
  

