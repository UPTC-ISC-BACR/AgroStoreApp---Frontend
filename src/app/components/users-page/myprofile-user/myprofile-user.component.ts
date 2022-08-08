import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user";
import {UsersServices} from "../../../../services/users.services";
import {MatDialog} from "@angular/material/dialog";
import {UserFormPageComponent} from "../../general/user-form-page/user-form-page.component";
import {ConfirmationDialogComponent} from "../../general/confirmation-dialog/confirmation-dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-myprofile-user',
  templateUrl: './myprofile-user.component.html',
  styleUrls: ['./myprofile-user.component.css']
})
export class MyprofileUserComponent implements OnInit {

  public user?:User

  constructor(
    private usersService: UsersServices,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser() {
    this.usersService.getLoggedUser().subscribe((res) => {
      this.user = res.data
    })
  }

  edit() {
    const dialogRef = this.dialog.open(UserFormPageComponent, {
      width: '60%',
      height: '100%',
      data: {edit: true, user: this.user}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usersService.updateUser(result).subscribe((res => {
          console.log(res.msg)
          this.getUser()
        }))
      }
    });
  }

  delete() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {message: "Estas seguro de que deseas eliminar tu usuario?"}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && this.user?.credentialId) {
        this.usersService.deleteUser(this.user?.credentialId).subscribe((res) => {
          console.log(res.msg)
          this.router.navigate(['login'])
        })
      }
    });
  }
}
