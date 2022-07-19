import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";
import {ApiService} from "@service/apiService/api.service";
import {HttpService} from "@service/httpService/http.service";
import {NewsRestaurant} from "@newsRestaurant/NewsRestaurant";
import {NewsRestaurantAddPayload} from "@newsRestaurant/NewsRestaurantAddPayload";
import {NewsRestaurantUpdatePayload} from "@newsRestaurant/NewsRestaurantUpdatePayload";


@Injectable({
  providedIn: 'root'
})
export class NewsRestaurantService extends ApiService{

  newsRestaurants$: BehaviorSubject<NewsRestaurant[]> = new BehaviorSubject<NewsRestaurant[]>([]);

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<NewsRestaurant[]> {
    const headers = new Headers();
    return this.http.get(this.baseUrl+'newsRestaurant/list')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as NewsRestaurant[]
          }else{
            return [];
          }
        }),
        tap((response: NewsRestaurant[]) => {
          this.newsRestaurants$.next(response);
        })
      );
  }

  getDetail(newsRestaurant_id: string): Observable<NewsRestaurant> {
    return this.http.get(this.baseUrl+`newsRestaurant/detail/${newsRestaurant_id}`)
      .pipe(
        map((response) => {
          return response.data as NewsRestaurant
        })
      );
  }

  deleteNewsRestaurant(newsRestaurant_id: string): Observable<NewsRestaurant> {
    return this.http.delete(this.baseUrl+`newsRestaurant/delete/${newsRestaurant_id}`)
      .pipe(
        map((response) => {
          return response.data as NewsRestaurant
        }),
        tap((response: NewsRestaurant) => {
          this.newsRestaurants$.getValue().forEach((e, index) => {
            if(e.id_news_restaurant.toString() == newsRestaurant_id)
            {
              let value = this.newsRestaurants$.getValue();
              value.splice(index, 1);
              this.newsRestaurants$.next(value);
            }
          });
        })
      );
  }

  create(payload: NewsRestaurantAddPayload): Observable<NewsRestaurant[]> {
    return this.http.post(this.baseUrl+'newsRestaurant/create', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getListFromRestaurant(payload.restaurant.id_restaurant.toString());
          } else{
            return of([]);
          }
        }),
        tap((response: NewsRestaurant[]) => {
          this.newsRestaurants$.next(response);
        })
      );

  }

  update(payload: NewsRestaurantUpdatePayload): Observable<NewsRestaurant[]> {
    console.log(JSON.stringify(payload));
    return this.http.put(this.baseUrl+'newsRestaurant/update/', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getListFromRestaurant(payload.restaurant.id_restaurant.toString());
          } else{
            return of([]);
          }
        }),
        tap((response: NewsRestaurant[]) => {
          this.newsRestaurants$.next(response);
        })
      );
  }

  getListFromRestaurant(restaurant_id: string) : Observable<NewsRestaurant[]> {
    const headers = new Headers();
    return this.http.get(this.baseUrl+`newsRestaurant/listForRestaurant/${restaurant_id}`)
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as NewsRestaurant[]
          }else{
            return [];
          }
        }),
        tap((response: NewsRestaurant[]) => {
          this.newsRestaurants$.next(response);
        })
      );
  }
}
