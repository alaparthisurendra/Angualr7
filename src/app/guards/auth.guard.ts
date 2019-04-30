import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {


  canActivate(){
    return true;
  }
  canDeactivate(){
    // redirect to u don't have rights page
    return true;
  }
  
}
