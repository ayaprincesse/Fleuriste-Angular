import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowerlistComponent } from './flower/flowerlist/flowerlist.component';
import { AddflowerComponent } from './flower/addflower/addflower.component';
import {FormsModule} from "@angular/forms";
import { EditflowerComponent } from './flower/editflower/editflower.component';
import { BouquetlistComponent } from './bouquet/bouquetlist/bouquetlist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddbouquetComponent } from './bouquet/addbouquet/addbouquet.component';
import { LoginComponent } from './Log/login/login.component';
import { SignupComponent } from './Log/signup/signup.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FlowerlistComponent,
    AddflowerComponent,
    EditflowerComponent,
    BouquetlistComponent,
    HomepageComponent,
    AddbouquetComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
