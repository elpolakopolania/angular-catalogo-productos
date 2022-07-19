// Angular imports
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs'; 
// Local imports
import {Solicitud} from '../model/solicitud';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private baseUrl = 'http://localhost:3000/solicitudes';
  public valorPrestado: any;
  private valorPrestadoSubject = new Subject<string>();
  public valorPrestadoObservable = this.valorPrestadoSubject.asObservable();

  enviarValorPrestado(valor: any){
    this.valorPrestado = valor;
    this.valorPrestadoSubject.next(valor);
  }

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Solicitud[]> {
    return this.http.get<any>(this.baseUrl);
  }

  get(id: string): Observable<Solicitud> {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }

  create(Solicitud: any) {
    return this.http.post<any>(this.baseUrl, Solicitud);
  }

  update(id: string, Solicitud: Solicitud): Observable<Solicitud> {
    return this.http.put<any>(this.baseUrl + '/' + id, Solicitud);
  }

  patch(id: string, solicitud: any): Observable<Solicitud> {
    console.log('patch', solicitud);
    return this.http.patch<any>(this.baseUrl + '/' + id, solicitud);
  }

  delete(id: string) {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }

  getValues(): Observable<Solicitud[]> {
    return this.http.get<any>(this.baseUrl + '?paidOut=true');
  }
}
