import {FlowerModel} from "./flower.model";
import {BouquettypeModel} from "./bouquettype.model";

export class BouquetModel{
  bouquetId ? : number;
  bouquetImage? : string;
  bouquetName? : string;
  bouquetPrice? : number;
  bouquetType? : string;
  bouquetFlowerList? : FlowerModel[];
}
