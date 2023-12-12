import { Injectable } from '@angular/core';
import {FlowerModel} from "../models/flower.model";

@Injectable({
  providedIn: 'root'
})
export class FlowerService {
  flowers : FlowerModel[];
  flowerToEdit! : FlowerModel;

  console=console;
  constructor(){
    this.flowers = [
      {flowerId : 1, flowerName : "tulip", flowerquantity: 50, flowerprice:12.00},
      {flowerId : 2, flowerName : "rose", flowerquantity : 100, flowerprice:8.00},
      {flowerId : 3, flowerName : "sunflower", flowerquantity: 30, flowerprice:11.00}
    ];
      console.log("constructor");
  }
  flowerList(){
    //  console.log("list",this.flowers);
    return this.flowers;
  }
  addFlower(newFlower : FlowerModel){
     // console.log("bbb", newFlower)
    this.flowers.push(newFlower);
     // console.log("done",this.flowers)
  }
  deleteFlower(flower : FlowerModel){
    const index = this.flowers.indexOf(flower);
    this.flowers.splice(index,1);
  }
  editFlower(id:number){
    this.flowerToEdit = this.flowers.find(f=> f.flowerId == id)!;
    return this.flowerToEdit;
  }
  updateFlower(flower:FlowerModel){
    this.deleteFlower(flower);
    this.addFlower(flower);
    this.sortFlowers();
    //console.log("done updating",this.flowers)
  }

  sortFlowers(){
    this.flowers.sort((a,b)=>
      (a.flowerId! > b.flowerId! ? 1 : -1)
    )
  }
}
