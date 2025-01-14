import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Car} from "../model/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<Car[]>(`http://localhost:8081/cars`);
  }

  insert(car: Car) {
    return this.http.post<Car>(`http://localhost:8081/cars`, car);
  }

}
