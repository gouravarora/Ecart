import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from 'src/app/shared/http-service.service';
import { LocalstorageService } from 'src/app/shared/localstorage.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.scss']
})
export class ProductslistComponent implements OnInit {

  products: any[];
  constructor( private readonly httpService: HttpServiceService, private readonly localstorage: LocalstorageService) {
    this.products = [];
  }

  ngOnInit() {
    forkJoin(
      this.httpService.getProducts(),
      this.localstorage.getProducts()
    )
    .subscribe((data: any[]) => {
      let [allProducts, adddedProducts] = data;

      allProducts.forEach((e) => {
        const added = adddedProducts.find(addedProduct => e.id === addedProduct.id);
        Object.assign(e, added);
      })
      this.products = allProducts;
    });
    
  }

  dispatchStep({productId, action}){
    /** The api might be accepting action(Inc|dec) with unique product Id */
    this.httpService.updateQuantity()
    .subscribe({
      next:() => {
        /**Update local storage here */
        this.localstorage.stepQuantity({productId, action})
      },error: () => {

      }
    })
  }

  addToCart(item){
    this.httpService.addToCart()
    .subscribe({
      next: () => {
        /**Updating localstorage for easy refresh */
        this.localstorage.addToCart(item);
      },
      error: () => {

      }
    })
  }

}
