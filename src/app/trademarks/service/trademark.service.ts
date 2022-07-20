import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs'; 
import { Trademark, CreateTrademark, UpdateTrademark, GetTrademark } from '../model/trademark';

@Injectable({
  providedIn: 'root',
})
export class TrademarkService {
  private baseUrl = 'trademarks/';

  constructor(private http: HttpClient) {
    this.baseUrl = environment.API_URL + this.baseUrl;
  }

  getAll(): Observable<Trademark[]> {
    return this.http.get<any>(this.baseUrl);
  }

  get(id: bigint): Observable<GetTrademark> {
    return this.http.get<any>(this.baseUrl + id);
  }

  create(trademark: CreateTrademark) {
    return this.http.post<any>(this.baseUrl, trademark);
  }

  update(id: bigint, trademark: UpdateTrademark){
    return this.http.put<any>(this.baseUrl + id, trademark);
  }

  patch(id: string, trademark: UpdateTrademark): Observable<Trademark> {
    console.log('patch', trademark);
    return this.http.patch<any>(this.baseUrl + id, trademark);
  }

  delete(id: bigint) {
    return this.http.delete<any>(this.baseUrl + id);
  }

}
