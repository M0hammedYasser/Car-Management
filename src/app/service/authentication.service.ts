import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationRequest} from "../model/authentication-request";
import {environment} from "../../environments/environment";
import {Authority, User} from "../model/user";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private http: HttpClient) {
  }

  login(request: AuthenticationRequest) {
    return this.http.post<any>(`${environment.url}/login`, request)
  }

  register(user: User) {
    return this.http.post(`${environment.url}/register`, user)
  }

  findAllAuthority() {
    return this.http.get<Authority[]>(`${environment.url}/authority`)
  }

  getToken() :string{
    return sessionStorage.getItem("token") || "";
  }

  decodeToken() {
    return jwtDecode(this.getToken());
  }


  getUserName() {
    return this.decodeToken().username || '';
  }

  getName() {
    return this.decodeToken().name || '';
  }

  getUserId (){
    return this.decodeToken().id || '';
  }

  getAuthority(){
    return this.decodeToken().authority || '';
  }
}
