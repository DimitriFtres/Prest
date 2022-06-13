import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";
import {CommentaryUpdatePayload} from "@commentary/CommentaryUpdatePayload";
import {CommentaryAddPayload} from "@commentary/CommentaryAddPayload";
import {Commentary} from "@commentary/Commentary";
import {ApiService} from "@service/apiService/api.service";
import {HttpService} from "@service/httpService/http.service";


@Injectable({
  providedIn: 'root'
})
export class CommentaryService extends ApiService{

  commentaries$: BehaviorSubject<Commentary[]> = new BehaviorSubject<Commentary[]>([]);

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<Commentary[]> {
    const headers = new Headers();
    return this.http.get(this.baseUrl+'commentary/list')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as Commentary[]
          }else{
            return [];
          }
        }),
        tap((response: Commentary[]) => {
          this.commentaries$.next(response);
        })
      );
  }

  getDetail(commentary_id: string): Observable<Commentary> {
    return this.http.get(this.baseUrl+`commentary/detail/${commentary_id}`)
      .pipe(
        map((response) => {
          return response.data as Commentary
        })
      );
  }

  deleteCommentary(commentary_id: string): Observable<Commentary> {
    return this.http.delete(this.baseUrl+`commentary/delete/${commentary_id}`)
      .pipe(
        map((response) => {
          return response.data as Commentary
        }),
        tap((response: Commentary) => {
          this.commentaries$.getValue().forEach((e, index) => {
            if(e.id_commentary.toString() == commentary_id)
            {
              let value = this.commentaries$.getValue();
              value.splice(index, 1);
              this.commentaries$.next(value);
            }
          });
        })
      );
  }

  create(payload: CommentaryAddPayload): Observable<Commentary[]> {
    return this.http.post(this.baseUrl+'commentary/create', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Commentary[]) => {
          this.commentaries$.next(response);
        })
      );

  }

  update(payload: CommentaryUpdatePayload): Observable<Commentary[]> {
    console.log(JSON.stringify(payload));
    return this.http.put(this.baseUrl+'commentary/update/', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Commentary[]) => {
          this.commentaries$.next(response);
        })
      );
  }

  getListFromRestaurant(restaurant_id: string) : Observable<Commentary[]> {
    const headers = new Headers();
    return this.http.get(this.baseUrl+`commentary/listForRestaurant/${restaurant_id}`)
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as Commentary[]
          }else{
            return [];
          }
        }),
        tap((response: Commentary[]) => {
          this.commentaries$.next(response);
        })
      );
  }
}
