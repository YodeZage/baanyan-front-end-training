import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth implements CanActivate {

  private hasPermission: boolean;

  constructor(private router: Router) {
    this.hasPermission = true;
  }

  canActivate(): boolean {
    console.log('Now it is check permissions');

    // return this.hasPermission;
    if (this.hasPermission) {
      return true;
    } else {
      this.router.navigate(['pageNotFound']);
      return false;
    }
  }

}
