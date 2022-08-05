import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
