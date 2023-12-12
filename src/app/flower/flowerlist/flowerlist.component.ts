import { Component } from '@angular/core';
import {FlowerModel} from "../../models/flower.model";
import {FlowerService} from "../../services/flower.service";

@Component({
  selector: 'app-flowerlist',
  templateUrl: './flowerlist.component.html',
  styleUrls: ['./flowerlist.component.css']
})
export class FlowerlistComponent {
  flowers : FlowerModel[];
  constructor(private fs : FlowerService){
    this.flowers = fs.flowerList();
  }

  deleteFlower(flower: FlowerModel){
    let message = confirm("Are you sure to delete this flower ?");
    if(message) this.fs.deleteFlower(flower);
  }
}
