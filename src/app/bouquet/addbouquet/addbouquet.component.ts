import { Component } from '@angular/core';
import {FlowerModel} from "../../models/flower.model";
import {FlowerService} from "../../services/flower.service";
import {BouquettypeModel} from "../../models/bouquettype.model";
import {BouquettypesService} from "../../services/bouquettypes.service";
import {BouquetModel} from "../../models/bouquet.model";
import {BouquetService} from "../../services/bouquet.service";

@Component({
  selector: 'app-addbouquet',
  templateUrl: './addbouquet.component.html',
  styleUrls: ['./addbouquet.component.css']
})
export class AddbouquetComponent {
  newBouquet : BouquetModel = new BouquetModel();
  flowers : FlowerModel[];
  bouquettypes : BouquettypeModel[];
  flowersadded : FlowerModel[]  = [];
  bouquetprix : number = 0;

  currentSection = 1;
  formData: any = {};
  constructor(private fs : FlowerService, private bts : BouquettypesService, private bs:BouquetService){
    this.flowers = fs.flowerList();
    this.bouquettypes = bts.bouquettypesList();
  }

  addflower(f : FlowerModel){
   this.flowersadded.push(f);
   this.bouquetprix += f.flowerprice!;
   alert("CUSTOMIZED BOUQUET PRICE : " + this.bouquetprix + "DH")
  }
  addtype(bt : BouquettypeModel){
    this.newBouquet.bouquetType = bt.bouquettypeName;
    alert("CUSTOMIZED BOUQUET TYPE : " +  this.newBouquet.bouquetType )
  }
  nextSection() {
    if (this.currentSection < 4) {
      this.currentSection++;
    }
  }

  prevSection() {
    if (this.currentSection > 1) {
      this.currentSection--;
    }
  }

  submitForm() {

    this.newBouquet.bouquetId = this.bs.bouquetList().length;
    this.newBouquet.bouquetFlowerList = this.flowersadded;
    this.newBouquet.bouquetPrice = this.bouquetprix;
    // Handle form submission here
    alert('new bouquet id :'+ this.newBouquet.bouquetId
    +' new bouquet name:'+ this.newBouquet.bouquetName
    +' new bouquet type :'+ this.newBouquet.bouquetType
    +' new bouquet price :'+ this.newBouquet.bouquetPrice
    +' new bouquet number of flowers:'+ this.newBouquet.bouquetFlowerList.length);

    this.bs.addBouquet(this.newBouquet);
  }
}
