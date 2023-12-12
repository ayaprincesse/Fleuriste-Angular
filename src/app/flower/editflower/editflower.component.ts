import {Component, OnInit} from '@angular/core';
import {FlowerModel} from "../../models/flower.model";
import {FlowerService} from "../../services/flower.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editflower',
  templateUrl: './editflower.component.html',
  styleUrls: ['./editflower.component.css']
})
export class EditflowerComponent implements OnInit{
  currentFlower = new FlowerModel();
  constructor(private fs : FlowerService,
              private ar :ActivatedRoute,
              private router: Router) {
  }

  //on each initialisation
  ngOnInit(): void {
    //console.log(this.ar.snapshot.params['id']);
    this.currentFlower = this.fs.editFlower(this.ar.snapshot.params['id']);
  }

  updateFlower(){
    this.fs.updateFlower(this.currentFlower);
    this.router.navigate(['flowerlist']);
  }

}
