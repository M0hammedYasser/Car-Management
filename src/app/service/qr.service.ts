import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CarRequest} from "../model/car-request";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class QRService {

  constructor(private  http : HttpClient) { }


  insert(data : any) {
    return this.http.post<CarRequest>(`${environment.url}/report`, data);
  }

  scan(value : string){
    return this.http.post(`${environment.url}/report/scan`, value);
  }
}
