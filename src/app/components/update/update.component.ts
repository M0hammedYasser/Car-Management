import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CarRequest} from "../../model/car-request";
import {CarService} from "../../service/car.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {

  car: CarRequest = {} as CarRequest;
  id: number = 0;

  constructor(private service: CarService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.findById(this.id).subscribe(res => this.car = res);
  }

  onFileChange(event: any, field: 'licenseImage' | 'personalImage') {
    const file = event.target.files[0];
    if (file) {
      this.car[field] = file; // Dynamically assign the file to the respective field
    }
  }

  update() {
    this.service.update(this.car , this.id).subscribe(
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
