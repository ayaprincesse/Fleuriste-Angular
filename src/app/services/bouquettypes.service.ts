import { Injectable } from '@angular/core';
import {FlowerModel} from "../models/flower.model";
import {BouquettypeModel} from "../models/bouquettype.model";

@Injectable({
  providedIn: 'root'
})
export class BouquettypesService {
  bouquettypes : BouquettypeModel[];

  console=console;
  constructor(){
    this.bouquettypes = [
      {bouquettypeId : 1, bouquettypeName : "Rond", bouquettypeImage:"assets/imgs/rond.jpeg"},
      {bouquettypeId : 2, bouquettypeName : "Long/Cascade", bouquettypeImage:"assets/imgs/long.jpg"},
      {bouquettypeId : 3, bouquettypeName : "En Boite", bouquettypeImage:"assets/imgs/enboite.png"},
      {bouquettypeId : 4, bouquettypeName : "Petit", bouquettypeImage:"assets/imgs/petit.png"},
      {bouquettypeId : 5, bouquettypeName : "Tiara", bouquettypeImage:"assets/imgs/tiara.png"},
    ];
    console.log("constructor");
  }
  bouquettypesList(){
    //  console.log("list",this.flowers);
    return this.bouquettypes;
  }
}
