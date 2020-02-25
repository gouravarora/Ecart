import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductslistRoutingModule } from './productslist-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductslistComponent } from './productslist/productslist.component';


@NgModule({
  declarations: [ProductslistComponent],
  imports: [
    CommonModule,
    ProductslistRoutingModule,
    SharedModule
  ]
})
export class ProductslistModule { }
