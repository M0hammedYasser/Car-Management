import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {NgIf} from "@angular/common";
import {AuthenticationService} from "../../service/authentication.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  isAuth: boolean = false;
  authority: string = '';

  constructor(private authService: AuthService, private router: Router, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.isAuth = this.authService.isAuthenticated()
    this.authority = this.authenticationService.getAuthority()
  }

  logOut() {
    this.router.navigateByUrl('/login');
    this.authService.logout();
    window.location.reload();
  }
}
