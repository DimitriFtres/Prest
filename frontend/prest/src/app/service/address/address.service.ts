import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";
import {AddressUpdatePayload} from "@address/AddressUpdatePayload";
import {AddressAddPayload} from "@address/AddressAddPayload";
import {Address} from "@address/Address";
import {ApiService} from "@service/apiService/api.service";
import {HttpService} from "@service/httpService/http.service";


@Injectable({
  providedIn: 'root'
})
export class AddressService extends ApiService{

  addresses$: BehaviorSubject<Address[]> = new BehaviorSubject<Address[]>([]);

  constructor(public http: HttpService) {
    super(http);
  }

  getList(): Observable<Address[]> {
    const headers = new Headers();
    return this.http.get(this.baseUrl+'address/list')
      .pipe(
        map((response) => {
          if(response.result){
            return response.data as Address[]
          }else{
            return [];
          }
        }),
        tap((response: Address[]) => {
          this.addresses$.next(response);
        })
      );
  }

  getDetail(address_id: string): Observable<Address> {
    return this.http.get(this.baseUrl+`address/detail/${address_id}`)
      .pipe(
        map((response) => {
          return response.data as Address
        })
      );
  }

  deleteAddress(address_id: string): Observable<Address> {
    return this.http.delete(this.baseUrl+`address/delete/${address_id}`)
      .pipe(
        map((response) => {
          return response.data as Address
        }),
        tap((response: Address) => {
          this.addresses$.getValue().forEach((e, index) => {
            if(e.id_address.toString() == address_id)
            {
              let value = this.addresses$.getValue();
              value.splice(index, 1);
              this.addresses$.next(value);
            }
          });
        })
      );
  }

  create(payload: AddressAddPayload): Observable<Address> {
    return this.http.post(this.baseUrl+'address/create', payload)
      .pipe(
        map((response) => {
          return response.data as Address
        }),
        tap((response: Address) => {
          let value = this.addresses$.getValue();
          value.push(response);
          this.addresses$.next(value);
        })
      );

  }

  update(payload: AddressUpdatePayload): Observable<Address[]> {
    console.log(JSON.stringify(payload));
    return this.http.put(this.baseUrl+'address/update/', payload)
      .pipe(
        switchMap((response) => {
          if(response.result){
            return this.getList();
          } else{
            return of([]);
          }
        }),
        tap((response: Address[]) => {
          this.addresses$.next(response);
        })
      );
  }

}
