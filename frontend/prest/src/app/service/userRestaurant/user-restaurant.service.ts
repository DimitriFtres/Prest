import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";
import {UserRestaurantUpdatePayload} from "@userRestaurant/UserRestaurantUpdatePayload";
import {UserRestaurantAddPayload} from "@userRestaurant/UserRestaurantAddPayload";
import {UserRestaurant} from "@userRestaurant/UserRestaurant";
import {ApiService} from "@service/apiService/api.service";
import {HttpService} from "@service/httpService/http.service";


@Injectable({
  providedIn: 'root'
})
export class UserRestaurantService extends ApiService{

  userRestaurants$: BehaviorSubject<UserRestaurant[]> = new BehaviorSubject<UserRestaurant[]>([]);

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<UserRestaurant[]> {
    const headers = new Headers();
    return this.http.get(this.baseUrl+'userRestaurant/list')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as UserRestaurant[]
          }else{
            return [];
          }
        }),
        tap((response: UserRestaurant[]) => {
          this.userRestaurants$.next(response);
        })
      );
  }

  getDetail(userRestaurant_id: string): Observable<UserRestaurant> {
    return this.http.get(this.baseUrl+`userRestaurant/detail/${userRestaurant_id}`)
      .pipe(
        map((response) => {
          return response.data as UserRestaurant
        })
      );
  }

  deleteUserRestaurant(userRestaurant_id: string): Observable<UserRestaurant> {
    return this.http.delete(this.baseUrl+`userRestaurant/delete/${userRestaurant_id}`)
      .pipe(
        map((response) => {
          return response.data as UserRestaurant
        }),
        tap((response: UserRestaurant) => {
          this.userRestaurants$.getValue().forEach((e, index) => {
            if(e.id.toString() == userRestaurant_id)
            {
              let value = this.userRestaurants$.getValue();
              value.splice(index, 1);
              this.userRestaurants$.next(value);
            }
          });
        })
      );
  }

  create(payload: UserRestaurantAddPayload): Observable<UserRestaurant[]> {
    return this.http.post(this.baseUrl+'userRestaurant/create', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: UserRestaurant[]) => {
          this.userRestaurants$.next(response);
        })
      );

  }

  update(payload: UserRestaurantUpdatePayload): Observable<UserRestaurant[]> {
    console.log(JSON.stringify(payload));
    return this.http.put(this.baseUrl+'userRestaurant/update/', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: UserRestaurant[]) => {
          this.userRestaurants$.next(response);
        })
      );
  }

}
