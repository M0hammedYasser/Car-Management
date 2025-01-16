import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Car} from "../model/car";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<Car[]>(`${environment.url}/cars`);
  }

  insert(car: Car) {
    return this.http.post<Car>(`${environment.url}/cars`, car);
  }

}
