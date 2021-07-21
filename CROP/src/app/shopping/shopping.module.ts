import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping/shopping.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CartHistoryComponent } from './cart-history/cart-history.component';


@NgModule({
  declarations: [
    ShoppingComponent,
    CartHistoryComponent
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class ShoppingModule { }
