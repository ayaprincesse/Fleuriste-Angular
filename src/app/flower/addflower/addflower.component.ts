import { Component } from '@angular/core';
import {FlowerModel} from "../../models/flower.model";
import {FlowerService} from "../../services/flower.service";

@Component({
  selector: 'app-addflower',
  templateUrl: './addflower.component.html',
  styleUrls: ['./addflower.component.css']
})
export class AddflowerComponent {
 newFlower : FlowerModel = new FlowerModel();
console=console;
  constructor(private fs:FlowerService) {
  }
  addFlower(){
   this.fs.addFlower(this.newFlower);
  }
}
