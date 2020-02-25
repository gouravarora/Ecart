import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  private cartData: any[];
  constructor() {
    const productData = localStorage.getItem('productsData');
    this.cartData = productData && Array.isArray(JSON.parse(productData)) ? JSON.parse(productData) : [];
  }

  addToCart(item){
    this.cartData.push(item);
    this.updateLocalStorage();
  }

  stepQuantity({productId, action}){
    // const productIndex = this.cartData.findIndex(e => e.id === productId);
    this.updateLocalStorage();
  }

  getProducts(){
    /** */
    return of(this.cartData);
  }

  updateLocalStorage(){
    localStorage.setItem('productsData', JSON.stringify(this.cartData));
  }
}
