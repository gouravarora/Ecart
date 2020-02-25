import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() productData : {
    id: string,
    name: string,
    price: number,
    quantity: number,
    added: boolean
  };

  @Output() addtocart = new EventEmitter<string>();
  @Output() step = new EventEmitter<{productId: string, action: string}>();

  constructor() { }

  ngOnInit() {
  }

  addToCart() {
    this.productData.added = true;
    this.productData.quantity = 1;
    this.addtocart.emit(this.productData.id);
  }

  dispatchDec(){
    if(this.productData.quantity === 1){
      this.productData.added = false;
    }
    this.productData.quantity--;
    this.step.emit({productId: this.productData.id, action: 'dec'});
  }

  dispatchInc(){
    this.productData.quantity++;
    this.step.emit({productId: this.productData.id, action: 'inc'});
  }
}
