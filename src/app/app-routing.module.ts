import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlowerlistComponent} from "./flower/flowerlist/flowerlist.component";
import {AddflowerComponent} from "./flower/addflower/addflower.component";
import {EditflowerComponent} from "./flower/editflower/editflower.component";
import {BouquetlistComponent} from "./bouquetlist/bouquetlist.component";

const routes: Routes = [
  {path : "flowerlist", component : FlowerlistComponent  },
  {path : "addflower", component : AddflowerComponent},
  {path : "editflower/:id", component: EditflowerComponent },
  {path : "bouquetList", component: BouquetlistComponent },
  {path : "", redirectTo: "flowerlist",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
