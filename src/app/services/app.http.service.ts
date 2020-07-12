import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './../model/app.product.model';

@Injectable({providedIn: 'root'})
export class HttpServiceService {

  private url: string;

  // the HttpClientModule impoprted in NgModule will resolve the HttpClient
  constructor(private http: HttpClient) {
    this.url = 'https://apiapptrainingnewapp.azurewebsites.net';
  }

  // Observable<T> is return type and T is expected response
  getData(): Observable<Product[]> {
    let resp: Observable<Product[]>;
    resp =  this.http.get<Product[]>(`${this.url}/api/Products`);
    return resp;
  }

  postData(prd: Product): Observable<Product> {
    let resp: Observable<Product>;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    resp = this.http.post<Product>(`${this.url}/api/Products`, prd, options);
    return resp;
  }

  putData(id: number, prd: Product): Observable<Product> {
    let resp: Observable<Product>;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    resp = this.http.put<Product>(`${this.url}/api/Products/${id}`, prd, options);
    return resp;
  }

  deleteData(id: number): Observable<boolean>{
    let resp: Observable<boolean>;
    resp = this.http.delete<boolean>(`${this.url}/api/Products/${id}`);
    return resp;
  }
}
