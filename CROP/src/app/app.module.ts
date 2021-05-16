import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HomeModule} from './home/home.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ContactUsModule} from './contact-us/contact-us.module';
import {LoginModule} from './login/login.module';
import {CartModule} from './cart/cart.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ContactUsModule,
    LoginModule,
    NgbModule,
    FontAwesomeModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
