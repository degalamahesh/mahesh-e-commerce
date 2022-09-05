import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './material/material.module'
import { CarouselModule } from 'ngx-owl-carousel-o';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitlebarComponent } from './components/titlebar/titlebar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { OrderComponent } from './components/order/order.component';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    CarouselComponent,
    ProductlistComponent,
    OrderComponent,
    ExpansionComponent,
    PaymentsComponent,
    StepperComponent,
    LoginComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CarouselModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
