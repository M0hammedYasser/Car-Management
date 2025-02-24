import {Component, OnInit} from '@angular/core';

import {NgForOf, NgIf} from "@angular/common";
import {Car} from "../../model/car";
import {CarService} from "../../service/car.service";
import {SearchComponent} from "../search/search.component";
import {SearchPipe} from "../../pipes/search.pipe";
import {Router, RouterLink} from "@angular/router";
import {environment} from "../../../environments/environment";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    SearchComponent,
    SearchPipe,
    RouterLink
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  cars: Car[] = [];
  searchText: string = '';
  protected readonly environment = environment;

  constructor(private service: CarService, private router: Router) {
  }

  onSearchTextEntered(searchValue: any) {
    this.searchText = searchValue
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(res => this.cars = res);
  }

  deleteById(id: number) {
    this.service.deleteById(id).subscribe();
    this.findAll();
  }

  go(carKind: string, id: number) {
    if (carKind == "Car")
      this.router.navigateByUrl(`/car/${id}`)
    else if (carKind == "Motorcycle")
      this.router.navigateByUrl(`/moto/${id}`)
  }


  openLicenseImage(imagePath: any) {
    Swal.fire({
      imageUrl: `${environment.url}/images/${imagePath}`,
      imageWidth: 700,
      imageHeight: 350,
      imageAlt: "Custom image"
    });
  }

  openPersonalImage(imagePath: any) {
    Swal.fire({
      imageUrl: `${environment.url}/images/${imagePath}`,
      imageWidth: 700,
      imageHeight: 350,
      imageAlt: "Custom image"
    });
  }
}
