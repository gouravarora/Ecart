import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private readonly http: HttpClient) { }
  

  login(){
    return this.http.get('/assets/login.json');
  }

  getProducts(){
    return this.http.get('/assets/products.json');
  }

  logout(){
    return this.http.get('/assets/logout.json');
  }

  updateQuantity(){
    return of({
      status: 200,
      message: 'updated'
    })
  }

  addToCart(){
    return of({
      status: 200,
      message: 'Added to cart'
    })
  }
}
