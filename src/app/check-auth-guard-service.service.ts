import { Injectable } from '@angular/core';
import { CustomAuthReturn } from './CustomClass/custom-auth-return'
@Injectable({
  providedIn: 'root'
})
export class CheckAuthGuardServiceService {

  constructor() { }

  getToken(){
    return !!localStorage.getItem('sessionUsertype');
  }

  getTokenUser(){
    return !!localStorage.getItem('sessionUser');
  }
}
