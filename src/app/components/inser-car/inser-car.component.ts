import {Component, OnInit} from '@angular/core';
import {CarService} from "../../service/car.service";
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {Router} from "@angular/router";
import {CarRequest} from "../../model/car-request";

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

  car: CarRequest = {} as CarRequest;

  constructor(private service: CarService, private router: Router) {}

  onFileChange(event: any, field: 'licenseImage' | 'personalImage') {
    const file = event.target.files[0];
    if (file) {
      this.car[field] = file; // Dynamically assign the file to the respective field
    }
  }

  insert() {
    this.service.insert(this.car).subscribe(
      (res) => {
        console.log('Car added successfully:', res);
        this.router.navigateByUrl('/cars'); // Navigate to the car list after a successful addition
      },
      (error) => {
        console.error('Error adding car:', error);
      }
    );
  }
}
