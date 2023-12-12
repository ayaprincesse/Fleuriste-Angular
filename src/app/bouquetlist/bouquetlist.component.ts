import { Component } from '@angular/core';
import {BouquetModel} from "../models/bouquet.model";
import {BouquetService} from "../services/bouquet.service";

@Component({
  selector: 'app-bouquetlist',
  templateUrl: './bouquetlist.component.html',
  styleUrls: ['./bouquetlist.component.css']
})
export class BouquetlistComponent {
  bouquets : BouquetModel[];
  constructor(private bs : BouquetService){
    this.bouquets = bs.bouquetList();
  }
}
