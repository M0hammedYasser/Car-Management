import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Authority, User} from "../../../model/user";
import {AuthenticationService} from "../../../service/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {


  user: User = {authority: {}} as User;
  authority: Authority[] = [];
  id: number = 0;

  constructor(private service: AuthenticationService,
              private router: Router, private activatedRoute: ActivatedRoute,
              private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.userService.findById(this.id).subscribe(res => this.user = res);
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
