import {Component, OnInit} from '@angular/core';
import {Car} from "../../model/car";
import {CarService} from "../../service/car.service";
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inser-car',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './inser-car.component.html',
  styleUrl: './inser-car.component.css'
})
export class InserCarComponent {

  car: Car = {} as Car;

  constructor(private service: CarService , private router: Router) {
  }

  insert() {
    this.service.insert(this.car).subscribe(res => {
      this.car = res
      this.router.navigateByUrl('/cars')
    });
  }
}
