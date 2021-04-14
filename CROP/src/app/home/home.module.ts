import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeadingComponent } from './heading/heading.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    HeadingComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [
    HeadingComponent,
    AboutUsComponent
  ]
})
export class HomeModule { }
