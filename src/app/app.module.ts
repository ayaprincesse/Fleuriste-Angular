import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowerlistComponent } from './flower/flowerlist/flowerlist.component';
import { AddflowerComponent } from './flower/addflower/addflower.component';
import {FormsModule} from "@angular/forms";
import { EditflowerComponent } from './flower/editflower/editflower.component';
import { BouquetlistComponent } from './bouquetlist/bouquetlist.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowerlistComponent,
    AddflowerComponent,
    EditflowerComponent,
    BouquetlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
