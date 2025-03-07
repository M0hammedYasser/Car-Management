import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }


  findAll() {
    return this.http.get<User[]>(`${environment.url}/users`)
  }

  findById(id: number) {
    return this.http.get<User>(`${environment.url}/users/${id}`)
  }
}
