import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeadingComponent } from './heading/heading.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeaturesComponent } from './features/features.component';
import { WebsitesComponent } from './websites/websites.component';
import { BanksComponent } from './banks/banks.component';


@NgModule({
  declarations: [
    HeadingComponent,
    AboutUsComponent,
    FeaturesComponent,
    WebsitesComponent,
    BanksComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ],
  exports: [
    HeadingComponent,
    AboutUsComponent,
    FeaturesComponent,
    WebsitesComponent,
    BanksComponent
  ]
})
export class HomeModule { }
