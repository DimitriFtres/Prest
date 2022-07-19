import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";
import {RestaurantUpdatePayload} from "@restaurant/RestaurantUpdatePayload";
import {RestaurantAddPayload} from "@restaurant/RestaurantAddPayload";
import {Restaurant} from "@restaurant/Restaurant";
import {ApiService} from "@service/apiService/api.service";
import {HttpService} from "@service/httpService/http.service";
import {Category} from "@category/Category";


@Injectable({
  providedIn: 'root'
})
export class RestaurantService extends ApiService{

  restaurants$: BehaviorSubject<Restaurant[]> = new BehaviorSubject<Restaurant[]>([]);

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<Restaurant[]> {
    return this.http.get(this.baseUrl+'restaurant/list')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as Restaurant[]
          }else{
            return [];
          }
        }),
        tap((response: Restaurant[]) => {
          this.restaurants$.next(response);
        })
      );
  }

  getListFromUser(user_id:  String): Observable<Restaurant[]> {
    return this.http.get(this.baseUrl+'restaurant/list/user/'+user_id)
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as Restaurant[]
          }else{
            return [];
          }
        }),
        tap((response: Restaurant[]) => {
          this.restaurants$.next(response);
        })
      );
  }

  getDetail(restaurant_id: string): Observable<Restaurant> {
    return this.http.get(this.baseUrl+`restaurant/detail/${restaurant_id}`)
      .pipe(
        map((response) => {
          return response.data as Restaurant
        })
      );
  }

  deleteRestaurant(restaurant_id: string): Observable<Restaurant> {
    return this.http.delete(this.baseUrl+`restaurant/delete/${restaurant_id}`)
      .pipe(
        map((response) => {
          return response.data as Restaurant
        }),
        tap((response: Restaurant) => {
          this.restaurants$.getValue().forEach((e, index) => {
            if(e.id_restaurant.toString() == restaurant_id)
            {
              let value = this.restaurants$.getValue();
              value.splice(index, 1);
              this.restaurants$.next(value);
            }
          });
        })
      );
  }

  create(payload: RestaurantAddPayload): Observable<Restaurant> {
    return this.http.post(this.baseUrl+'restaurant/create', payload)
      .pipe(
        map((response) => {
          return response.data as Restaurant;
        }),
        tap((response: Restaurant) => {
          let value = this.restaurants$.getValue();
          value.push(response);
          this.restaurants$.next(value);
        })
      );
  }

  addFile(file: FormData): Observable<String> {
    return this.http.post(this.baseUrl+'restaurant/add/file', file)
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as String;
          } else{
            return "";
          }
        })
      );
  }

  update(payload: RestaurantUpdatePayload): Observable<Restaurant[]> {
    console.log(JSON.stringify(payload));
    return this.http.put(this.baseUrl+'restaurant/update/', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Restaurant[]) => {
          this.restaurants$.next(response);
        })
      );
  }

}
