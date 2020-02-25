import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ItemComponent
  ]
})
export class SharedModule { }
