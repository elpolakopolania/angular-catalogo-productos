import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs'; 
import { Product, CreateProduct, UpdateProduct, GetProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'products/';

  constructor(private http: HttpClient) {
    this.baseUrl = environment.API_URL + this.baseUrl;
  }

  getAll(): Observable<Product[]> {
    return this.http.get<any>(this.baseUrl);
  }

  get(id: bigint): Observable<GetProduct> {
    return this.http.get<any>(this.baseUrl + id);
  }

  create(product: CreateProduct) {
    return this.http.post<any>(this.baseUrl, product);
  }

  update(id: bigint, product: UpdateProduct){
    return this.http.put<any>(this.baseUrl + id, product);
  }

  patch(id: string, product: UpdateProduct): Observable<Product> {
    console.log('patch', product);
    return this.http.patch<any>(this.baseUrl + id, product);
  }

  delete(id: bigint) {
    return this.http.delete<any>(this.baseUrl + id);
  }
}
