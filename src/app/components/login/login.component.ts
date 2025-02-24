import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthenticationRequest} from "../../model/authentication-request";
import {Router, RouterLink} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  auth: AuthenticationRequest = {} as AuthenticationRequest;

  constructor(private service: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    sessionStorage.clear();
  }

  login() {
    this.service.login(this.auth).subscribe({
        next: (response) => {
          sessionStorage.setItem("token", `Bearer ${response.token}`);
          if (this.service.getAuthority() == 'ROLE_USER')
            this.router.navigateByUrl('/qr-reader').then(r => window.location.reload());
          else if(this.service.getAuthority() == 'ROLE_MANAGER')
            this.router.navigateByUrl('/reports').then(r => window.location.reload());
          else
            this.router.navigateByUrl('/cars').then(r => window.location.reload());

        },
        error: (err) => {
          alert(err.error.message)
        }
      }
    )
  }

}
