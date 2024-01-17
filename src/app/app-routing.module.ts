import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlowerlistComponent} from "./flower/flowerlist/flowerlist.component";
import {AddflowerComponent} from "./flower/addflower/addflower.component";
import {EditflowerComponent} from "./flower/editflower/editflower.component";
import {BouquetlistComponent} from "./bouquet/bouquetlist/bouquetlist.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {AddbouquetComponent} from "./bouquet/addbouquet/addbouquet.component";
import {LoginComponent} from "./Log/login/login.component";
import {SignupComponent} from "./Log/signup/signup.component";

const routes: Routes = [
  {path : "flowerlist", component : FlowerlistComponent  },
  {path : "addflower", component : AddflowerComponent},
  {path : "editflower/:id", component: EditflowerComponent },
  {path : "bouquetList", component: BouquetlistComponent },
  {path : "addbouquet", component: AddbouquetComponent},
  {path : "homepage", component: HomepageComponent },
  {path : "login", component: LoginComponent },
  {path : "signup", component: SignupComponent },
  {path : "", redirectTo: "homepage",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
