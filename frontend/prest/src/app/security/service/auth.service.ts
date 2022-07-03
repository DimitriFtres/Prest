import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApiService} from "@service/apiService/api.service";
import {TokenService} from "./token.service";
import {HttpService} from "@service/httpService/http.service";
import {Credential, RefreshPayload, SigninPayload, SignupPayload, TokenDto} from "../model";
import {ApiResponse} from "@common/ApiResponse";
import {ApiUriEnum} from "@common/enum";
import {SigninResponse} from "../model/response/signin.response";
import {NavigationService} from "@service/httpService/navigation.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public tokenService: TokenService, http: HttpService, public navigation: NavigationService) {
    super(http);
    this.http = http;
  }

  signin(payload: SigninPayload): Observable<SigninResponse> {
    return this.http.post(`${this.baseUrl}${ApiUriEnum.SIGNIN}`, payload).pipe(
      map((response: ApiResponse) => {
        if (response.result) {
          const signinResponse: SigninResponse = response.data as SigninResponse;
          this.tokenService.saveToken(signinResponse.token.access_token);
          this.tokenService.saveRefreshToken(signinResponse.token.refresh_token);
          this.isAuthenticated$.next(true);
          this.navigation.navigateToSecure();
        }
        sessionStorage.setItem('user', (response.data as SigninResponse).user.email);
        return response.data as SigninResponse;
      })
    )
  }

  me(): Observable<Credential> {
    return this.http.get(`${this.baseUrl}${ApiUriEnum.ME}`).pipe(
      map(response => {
        if(response.result)
        {
          return response.data as Credential;
        }
        else
        {
          return {} as Credential;
        }
      })
    );
  }

  signup(payload: SignupPayload): Observable<Credential> {
    return this.http.post(`${this.baseUrl}${ApiUriEnum.SIGNUP}`, payload).pipe(
      map(response => {
        if(response.result)
        {
          return response.data as Credential;
        }
        else
        {
          return {} as Credential;
        }
      })
    );
  }

  refreshToken(refresh: RefreshPayload): Observable<ApiResponse> {
    return this.http.post(`${this.baseUrl}${ApiUriEnum.REFRESH_TOKEN}`, refresh).pipe(
      map((response: ApiResponse) => {
        if (response.result) {
          const tokenResponse: TokenDto = response.data as TokenDto;
          this.tokenService.saveToken(tokenResponse.access_token);
          this.tokenService.saveRefreshToken(tokenResponse.refresh_token);
          this.isAuthenticated$.next(true);
        }
        return response;
      })
    )
  }

  logout(): void {
    this.tokenService.signOut();
    this.isAuthenticated$.next(false);
    sessionStorage.removeItem('user');
    this.navigation.navigateToUnsecure();
  }
}
