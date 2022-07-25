import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { UsersServices } from "../../../../services/users.services";

@Component({
  selector: 'app-delete-user-page',
  templateUrl: './delete-user-page.component.html',
  styleUrls: ['./delete-user-page.component.css']
})
export class DeleteUserPageComponent implements OnInit {

  deleteuForm:FormGroup;

  constructor(
    private usersService: UsersServices,
    private fb: FormBuilder
  ) {
    //todo: agregar campos del form group
    this.deleteuForm = fb.group({})
  }

  ngOnInit(): void {
    this.deleteuForm = new FormGroup({
      id: new FormControl(''),
    });
  }

  deleteUser(): void {
    const id = this.deleteuForm.get('id')?.value;

    this.usersService.deleteUser(id).subscribe((response) => {
      if(response.msg == "ok" ){
        console.log("El usuario fue eliminado")
      }
      console.log('Server response', response.msg);
    });
  }

}
