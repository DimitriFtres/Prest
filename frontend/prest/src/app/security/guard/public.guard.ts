import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../service/auth.service";
import {isNil} from "lodash";
import {RefreshPayload} from "../model";
import {map} from "rxjs/operators";
import {ApiResponse} from "@common/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {
  constructor(private auth: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (!isNil(this.auth.tokenService.getRefreshToken())) {
      const refreshPayload: RefreshPayload = {
        refresh: this.auth.tokenService.getRefreshToken()!
      }
      // So , we are not logged but still have a token in local storage
      // we'll try to retrieve user or refresh token if expired
      this.auth.refreshToken(refreshPayload).subscribe();
    }
    return true;
  }

}
