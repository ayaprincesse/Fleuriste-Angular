import { Injectable } from '@angular/core';
import {BouquetModel} from "../models/bouquet.model";

@Injectable({
  providedIn: 'root'
})
export class BouquetService {
  bouquets : BouquetModel[];
  constructor() {
    this.bouquets = [
      {bouquetId : 1, bouquetType : "Rond", bouquetImage: "assets/imgs/rond.jpeg" },
      {bouquetId : 2, bouquetType : "Long", bouquetImage: "assets/imgs/long.jpg" },
      {bouquetId : 3, bouquetType : "Rond", bouquetImage: "assets/imgs/rond.jpeg" }
    ];
  }
  bouquetList(){
    //  console.log("list",this.flowers);
    return this.bouquets;
  }
}
