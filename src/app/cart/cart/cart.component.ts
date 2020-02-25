import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/shared/localstorage.service';
import { HttpServiceService } from 'src/app/shared/http-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: any[] = [];

  constructor(private readonly localStorage: LocalstorageService, private readonly httpService: HttpServiceService) { }

  ngOnInit() {
    this.localStorage.getProducts()
    .subscribe((data) => {
      this.products = data;
    })
  }

  dispatchStep({productId, action}) {
    /** The api might be accepting action(Inc|dec) with unique product Id */
    this.httpService.updateQuantity()
      .subscribe({
        next: () => {
          /**Update local storage here */
          this.localStorage.stepQuantity({ productId, action })
        }, error: () => {

        }
      })
  }

}
