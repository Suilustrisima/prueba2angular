import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import {ProductoInterface} from '../models/producto-interface';

import {AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  productos: Observable<any>;
  producto: Observable<any>;


  constructor(private http: HttpClient, private authService: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: this.authService.getToken()
  });



  getAllProductos() {
    const url_api = 'http://localhost:3000/api/productos';
    return this.http.get(url_api)
  }

  getProductoID(id: string) {
    const url_api = `http://localhost:3000/api/productos/${id}`;
    return (this.producto = this.http.get(url_api));
  }

  saveProducto(producto: ProductoInterface) {
    //TODO: Obtener token
    //TODO not null
    let token= this.authService.getToken();
    const url_api = `http://localhost:3000/api/productos?acces_token=${token}`;
    return this.http.post<ProductoInterface>(url_api, producto, {headers: this.headers})
      .pipe(map(data=> data));
  }

  updateProducto(producto) {
    //TODO: Obtener token
    //TODO not null
    let token= this.authService.getToken();
    const url_api = `http://localhost:3000/api/productos?acces_token=${token}`;
    return this.http.put<ProductoInterface>(url_api, producto, {headers: this.headers})
      .pipe(map(data=> data));
  }

  deleteProducto(id: string) {
    //TODO: Obtener token
    //TODO not null
    let token= this.authService.getToken();
    const url_api = `http://localhost:3000/api/productos?acces_token=${token}`;
    return this.http.delete<ProductoInterface>(url_api, {headers: this.headers})
      .pipe(map(data=> data));
  }



}
