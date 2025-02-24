import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Car} from "../model/car";
import {environment} from "../../environments/environment";
import {CarRequest} from "../model/car-request";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<Car[]>(`${environment.url}/cars`);
  }


  findByID(id: number) {
    return this.http.get<Car>(`${environment.url}/cars/${id}`);
  }

  findById(id: number) {
    return this.http.get<CarRequest>(`${environment.url}/cars/${id}`);
  }

  findCars() {
    return this.http.get<Car[]>(`${environment.url}/cars/kind?carKind=Car`);
  }

  findMotorcycle() {
    return this.http.get<Car[]>(`${environment.url}/cars/kind?carKind=Motorcycle`);
  }

  insert(car: CarRequest) {
    const formData = new FormData();
    formData.append('carOwner', car.carOwner);
    formData.append('side', car.side);
    formData.append('carNumber', car.carNumber);
    formData.append('carKind', car.carKind);
    formData.append('carModel', car.carModel);
    formData.append('carColor', car.carColor);
    if (car.licenseImage) {
      formData.append('licenseImage', car.licenseImage);
    }
    if (car.personalImage) {
      formData.append('personalImage', car.personalImage);
    }
    return this.http.post<CarRequest>(`${environment.url}/cars`, formData);
  }


  update(car: CarRequest, id: number) {
    return this.http.put<CarRequest>(`${environment.url}/cars?id=${id}`, car);
  }

  deleteById(id:number){
    return this.http.delete<Car>(`${environment.url}/cars?id=${id}`);
  }
}
