import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {NgForOf} from "@angular/common";
import {Car} from "../../model/car";
import {CarService} from "../../service/car.service";
import {ActivatedRoute} from "@angular/router";
import html2canvas from "html2canvas";

@Component({
  selector: 'app-moto-card',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './moto-card.component.html',
  styleUrl: './moto-card.component.css'
})
export class MotoCardComponent implements OnInit{

  car: Car = {} as Car;
  id : number = 0;
  protected readonly environment = environment;

  constructor(private service: CarService , private activatedRoute:ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.findByID(this.id).subscribe(res => this.car = res);
  }



}
