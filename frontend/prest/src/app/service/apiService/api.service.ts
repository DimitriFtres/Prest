import {Injectable} from '@angular/core';
import {HttpService} from "@service/httpService/http.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:2022/api/';

  constructor(public http: HttpService) {
  }
}
