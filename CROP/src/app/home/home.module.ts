import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeadingComponent } from './heading/heading.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import {MatCardModule} from '@angular/material/card';
import { ShoppingModule } from '../shopping/shopping.module';


@NgModule({
  declarations: [
    HeadingComponent,
    HomeComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    ShoppingModule
  ],
  exports: [
    HeadingComponent,
  ]
})
export class HomeModule { }
