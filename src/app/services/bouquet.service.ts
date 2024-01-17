import { Injectable } from '@angular/core';
import {BouquetModel} from "../models/bouquet.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BouquettypeModel} from "../models/bouquettype.model";
import {BouquettypesService} from "./bouquettypes.service";
import {FlowerModel} from "../models/flower.model";
const httpoptions={
  headers :new HttpHeaders({
    "content-type" : 'applicaton/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class BouquetService {
  // apiURL: string = "localhost8080/api";
  bouquets : BouquetModel[];
  bouquettypes : BouquettypeModel[]
  constructor(private bts : BouquettypesService) {
    this.bouquettypes = bts.bouquettypesList();
    this.bouquets = [
      {bouquetId : 1, bouquetType : this.bouquettypes[0].bouquettypeName , bouquetName : 'I love you', bouquetPrice : 75,  bouquetImage: "assets/imgs/rond.jpeg" },
      {bouquetId : 2, bouquetType : this.bouquettypes[1].bouquettypeName, bouquetName : 'Sunflowers', bouquetPrice : 80,  bouquetImage: "assets/imgs/sunflowerbouquet.png" },
      {bouquetId : 3, bouquetType : this.bouquettypes[0].bouquettypeName, bouquetName : 'Tulipes ', bouquetPrice : 130,  bouquetImage: "assets/imgs/tulips.png" },
      {bouquetId : 3, bouquetType : this.bouquettypes[0].bouquettypeName, bouquetName : 'Roses Rose et Blanche', bouquetPrice : 80,  bouquetImage: "assets/imgs/rosesroses.png" },
      {bouquetId : 3, bouquetType : this.bouquettypes[0].bouquettypeName, bouquetName : 'Daisies', bouquetPrice : 105,  bouquetImage: "assets/imgs/daisies.png" },
      {bouquetId : 3, bouquetType : this.bouquettypes[0].bouquettypeName, bouquetName : 'I appreciate you', bouquetPrice : 95,  bouquetImage: "assets/imgs/appreciate.png" },

    ];

  }
  bouquetList(){
    //  console.log("list",this.flowers);
    return this.bouquets;
    //return this.http.get<BouquetModel[]>(this.apiURL+"")
  }

  addBouquet(newBouquet : BouquetModel ){
    this.bouquets.push(newBouquet);
    alert("NEW BOUQUET ADDED");
  }
}
