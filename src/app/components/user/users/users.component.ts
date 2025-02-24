import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {SearchComponent} from "../../search/search.component";
import {SearchPipe} from "../../../pipes/search.pipe";
import {RouterLink} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/user";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    SearchComponent,
    SearchPipe,
    RouterLink,
    NgStyle
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  searchText: string = ''

  constructor(private service: UserService) {
  }

  onSearchTextEntered(searchValue: any) {
    this.searchText = searchValue
  }

  ngOnInit() {
    this.service.findAll().subscribe(res => {
      this.users = res;
    })
  }
}
