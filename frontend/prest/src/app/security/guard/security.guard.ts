import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AuthService} from "../service/auth.service";
import {RefreshPayload} from "../model";
import {ApiResponse} from "@common/ApiResponse";
import {isNil} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class SecurityGuard implements CanActivate {
  constructor(private auth: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    // if already logged --------------------------
    if (this.auth.isAuthenticated$.value) {
      return true;
    }
    // else if no token available -----------------
    if (isNil(this.auth.tokenService.getRefreshToken())) {
      this.auth.navigation.navigateToUnsecure();
      return false;
    } else {
      const refreshPayload: RefreshPayload = {
        refresh: this.auth.tokenService.getRefreshToken()!
      }
      // So , we are not logged but still have a token in local storage
      // we'll try to retrieve user or refresh token if expired
      return this.auth.refreshToken(refreshPayload).pipe(map((response: ApiResponse) => {
        if (!response.result) {
          this.auth.navigation.navigateToUnsecure();
        }
        return response.result;
      }));
    }
  }

}
