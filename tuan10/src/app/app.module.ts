import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import {RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { GiohangComponent } from './giohang/giohang.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    ChitietComponent,
    GiohangComponent,
    CheckoutComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    RouterModule.forRoot ([
      {path: '', component:TrangchuComponent},
      {path: 'trangchu', component:TrangchuComponent},
      {path: 'trangchu/:id', component:ChitietComponent},
      {path: 'giohang', component:GiohangComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
