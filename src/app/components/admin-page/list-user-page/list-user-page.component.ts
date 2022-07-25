import { Component, OnInit } from '@angular/core';
import { User } from "../../../models/user";
import { UsersServices} from "../../../../services/users.services";

@Component({
  selector: 'app-list-user-page',
  templateUrl: './list-user-page.component.html',
  styleUrls: ['./list-user-page.component.css']
})
export class ListUserPageComponent implements OnInit {

  users: User[] = [];

  constructor(
    private usersService: UsersServices
  ) {

  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((response) => {
      this.users = response;
    })

  }
}
