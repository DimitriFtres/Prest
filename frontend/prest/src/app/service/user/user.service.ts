import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";
import {UserUpdatePayload} from "@user/UserUpdatePayload";
import {UserAddPayload} from "@user/UserAddPayload";
import {User} from "@user/User";
import {ApiService} from "@service/apiService/api.service";
import {HttpService} from "@service/httpService/http.service";


@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService{

  users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<User[]> {
    const headers = new Headers();
    return this.http.get(this.baseUrl+'user/list')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as User[]
          }else{
            return [];
          }
        }),
        tap((response: User[]) => {
          this.users$.next(response);
        })
      );
  }

  getDetail(user_id: string): Observable<User> {
    return this.http.get(this.baseUrl+`user/detail/${user_id}`)
      .pipe(
        map((response) => {
          return response.data as User
        })
      );
  }

  getDetailFromEmail(email: string): Observable<User> {
    return this.http.get(this.baseUrl+`user/detail/email/${email}`)
      .pipe(
        map(response => {
          return response.data as User;
        })
      )
  }

  deleteUser(user_id: string): Observable<User> {
    return this.http.delete(this.baseUrl+`user/delete/${user_id}`)
      .pipe(
        map((response) => {
          return response.data as User
        }),
        tap((response: User) => {
          this.users$.getValue().forEach((e, index) => {
            if(e.id_user.toString() == user_id)
            {
              let value = this.users$.getValue();
              value.splice(index, 1);
              this.users$.next(value);
            }
          });
        })
      );
  }

  create(payload: UserAddPayload): Observable<User[]> {
    return this.http.post(this.baseUrl+'user/create', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: User[]) => {
          this.users$.next(response);
        })
      );

  }

  update(payload: UserUpdatePayload): Observable<User[]> {
    console.log(JSON.stringify(payload));
    return this.http.put(this.baseUrl+'user/update/', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: User[]) => {
          this.users$.next(response);
        })
      );
  }

}
