import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs'; 
import { Trademark } from '../model/trademark';

@Injectable({
  providedIn: 'root',
})
export class TrademarkService {
  private baseUrl = 'trademarks/';
  /*public valorPrestado: any;
  private valorPrestadoSubject = new Subject<string>();
  public valorPrestadoObservable = this.valorPrestadoSubject.asObservable();

  enviarValorPrestado(valor: any) {
    this.valorPrestado = valor;
    this.valorPrestadoSubject.next(valor);
  }*/

  constructor(private http: HttpClient) {
    this.baseUrl = environment.API_URL + this.baseUrl;
  }

  getAll(): Observable<Trademark[]> {
    return this.http.get<any>(this.baseUrl);
  }

  /*get(id: string): Observable<Trademark> {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }

  create(Solicitud: any) {
    return this.http.post<any>(this.baseUrl, Solicitud);
  }

  update(id: string, Solicitud: Solicitud): Observable<Trademark> {
    return this.http.put<any>(this.baseUrl + '/' + id, Solicitud);
  }

  patch(id: string, solicitud: any): Observable<Trademark> {
    console.log('patch', solicitud);
    return this.http.patch<any>(this.baseUrl + '/' + id, solicitud);
  }

  delete(id: string) {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }

  getValues(): Observable<Trademark[]> {
    return this.http.get<any>(this.baseUrl + '?paidOut=true');
  }*/
}
