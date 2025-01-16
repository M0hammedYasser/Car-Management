import {Component, OnInit} from '@angular/core';

import {NgForOf, NgIf} from "@angular/common";
import {Car} from "../../model/car";
import {CarService} from "../../service/car.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  cars: Car[] = [];

  constructor(private service: CarService) {
  }

  ngOnInit() {
    this.service.findAll().subscribe(res => this.cars = res);
  }


  protected readonly environment = environment;
}
