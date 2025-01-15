import {Component, OnInit} from '@angular/core';
import {Car} from "../../model/car";
import {CarService} from "../../service/car.service";

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent implements OnInit{

  cars: Car[] = [];

  constructor(private service: CarService) {
  }

  ngOnInit() {
    this.service.findAll().subscribe(res => this.cars = res);
  }


}
