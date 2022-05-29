import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";
import {CategoryUpdatePayload} from "@category/CategoryUpdatePayload";
import {CategoryAddPayload} from "@category/CategoryAddPayload";
import {Category} from "@category/Category";
import {ApiService} from "@service/apiService/api.service";
import {HttpService} from "@service/httpService/http.service";


@Injectable({
  providedIn: 'root'
})
export class CategoryService extends ApiService{

  categories$: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<Category[]> {
    const headers = new Headers();
    return this.http.get(this.baseUrl+'category/list')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as Category[]
          }else{
            return [];
          }
        }),
        tap((response: Category[]) => {
          this.categories$.next(response);
        })
      );
  }

  getDetail(category_id: string): Observable<Category> {
    return this.http.get(this.baseUrl+`category/detail/${category_id}`)
      .pipe(
        map((response) => {
          return response.data as Category
        })
      );
  }

  deleteCategory(category_id: string): Observable<Category> {
    return this.http.delete(this.baseUrl+`category/delete/${category_id}`)
      .pipe(
        map((response) => {
          return response.data as Category
        }),
        tap((response: Category) => {
          this.categories$.getValue().forEach((e, index) => {
            if(e.id_category.toString() == category_id)
            {
              let value = this.categories$.getValue();
              value.splice(index, 1);
              this.categories$.next(value);
            }
          });
        })
      );
  }

  create(payload: CategoryAddPayload): Observable<Category[]> {
    return this.http.post(this.baseUrl+'category/create', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Category[]) => {
          this.categories$.next(response);
        })
      );

  }

  update(payload: CategoryUpdatePayload): Observable<Category[]> {
    console.log(JSON.stringify(payload));
    return this.http.put(this.baseUrl+'category/update/', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Category[]) => {
          this.categories$.next(response);
        })
      );
  }

}
