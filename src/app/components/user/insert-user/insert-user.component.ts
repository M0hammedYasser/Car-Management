import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../service/authentication.service";
import {Router} from "@angular/router";
import {Authority, User} from "../../../model/user";
import {FormsModule} from "@angular/forms";
import {JsonPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-insert-user',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    JsonPipe
  ],
  templateUrl: './insert-user.component.html',
  styleUrl: './insert-user.component.css'
})
export class InsertUserComponent implements OnInit {

  user: User = {authority: {}} as User;
  authority: Authority[] = [];

  constructor(private service: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    this.service.findAllAuthority().subscribe(res => this.authority = res);
  }

  onSubmit() {
    this.service.register(this.user).subscribe({
        next: (response) => {
          this.router.navigateByUrl('/users')
        },
        error: (err) => {
          alert(err.error.message)
        }
      }
    )
  }

}
