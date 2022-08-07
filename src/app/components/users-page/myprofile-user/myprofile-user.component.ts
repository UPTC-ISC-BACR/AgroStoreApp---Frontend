import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user";
import {UsersServices} from "../../../../services/users.services";
import {MatDialog} from "@angular/material/dialog";
import {UserFormPageComponent} from "../../general/user-form-page/user-form-page.component";
import {ConfirmationDialogComponent} from "../../general/confirmation-dialog/confirmation-dialog.component";

@Component({
  selector: 'app-myprofile-user',
  templateUrl: './myprofile-user.component.html',
  styleUrls: ['./myprofile-user.component.css']
})
export class MyprofileUserComponent implements OnInit {

  public user?:User

  constructor(
    private usersService: UsersServices,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.usersService.getLoggedUser().subscribe((res) => {
      this.user = res.data
    })
  }

  edit() {
    console.log(this.user)
    const dialogRef = this.dialog.open(UserFormPageComponent, {
      width: '60%',
      height: '100%',
      data: {edit: true, user: this.user}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && this.user) {
        this.usersService.updateUser(this.user).subscribe((res => {
          console.log(res.data)
        }))
      }
    });
  }

  delete() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {message: "Estas seguro de que deseas eliminar tu usuario?"}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //todo: conectar al servicio
        console.warn(`Removido ${this.user?.document}`)
      }
    });
  }
}
