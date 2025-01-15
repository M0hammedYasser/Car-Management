import {Component, OnInit} from '@angular/core';
import {Car} from "../../model/car";
import {CarService} from "../../service/car.service";

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent implements OnInit{


  cars: Car[] = [];

  constructor(private service: CarService) {
  }

  ngOnInit() {
    this.service.findAll().subscribe(res => this.cars = res);
  }

}
