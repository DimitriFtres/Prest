import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';
import {AuthService} from "../../security/service/auth.service";
import {ApiUriEnum} from "@common/enum";
import {RefreshPayload} from "../../security/model";
import {ApiResponse} from "@common/ApiResponse";
import {isNil} from "lodash";
import {TOKEN_KEY} from "@common/constant";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  attemps = 0;

  constructor(public auth: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneReq = this.addToken(req);
    console.log("Pour l'url : " + req.url.toString() + " token envoyé + " + req.headers.get("Authorization"));
    return next.handle(cloneReq).pipe(
      catchError((err: HttpErrorResponse) => {
        return this.handleError(err, cloneReq, next)
      })
    )
  }

  private addToken(req: HttpRequest<any>): HttpRequest<any> {
    if (!req.url.includes(ApiUriEnum.SIGNIN) && !req.url.includes(ApiUriEnum.SIGNUP) && !req.url.includes(ApiUriEnum.REFRESH_TOKEN)) {
      if(this.auth.tokenService.isLocalStorageEmpty())
      {
        return req;
      }
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.tokenService.getToken()}`
        }
      });
      console.log("Pour l'url : " + req.url.toString() + "bearer + " +this.auth.tokenService.getToken());
    }
    return req;
  }

  private handleError(err: HttpErrorResponse, req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    if (this.attemps > 1) {
      console.log("this.attemps =" + this.attemps);
      console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
      this.attemps = 0;
      this.auth.navigation.navigateToUnsecure();
      return throwError(err);
    }
    this.attemps++;
    if (err.error.error === 'unauthorized' || err.status === 401) {
      if (isNil(this.auth.tokenService.getRefreshToken())) {
        this.auth.navigation.navigateToUnsecure();
        return throwError(err);
      } else {
        const refreshPayload: RefreshPayload = {
          refresh: this.auth.tokenService.getRefreshToken()!
        }
        return this.auth.refreshToken(refreshPayload).pipe(switchMap((response: ApiResponse) => {
          if (!response.result) {
            return throwError(err);
          }
          console.log("refresh token : " + response.data);
          return this.intercept(req, next);
        }));
      }
    }
    return throwError(err);
  }
}
