import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import { User } from "../../../models/user";
import { UsersServices} from "../../../../services/users.services";


@Component({
  selector: 'app-create-user-page',
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.css']
})
export class CreateUserPageComponent implements OnInit {

  userForm:FormGroup;

  constructor(
    private usersService: UsersServices,
    private fb: FormBuilder
  ) {
    this.userForm = fb.group({})
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl(''),
      typedoc : new FormControl(),
      email : new FormControl(''),
      password : new FormControl(''),
      city : new FormControl(''),
      cellphone : new FormControl(''),
    });
  }

  saveUser(): void {
    const document = this.userForm.get('id')?.value;
    const full_name = this.userForm.get('name')?.value;
    const document_type = this.userForm.get('typedoc')?.value;
    const email = this.userForm.get('email')?.value;
    const password = this.userForm.get('password')?.value;
    const city = this.userForm.get('city')?.value;
    const phone_number = this.userForm.get('cellphone')?.value;
    const user: User = {document,full_name,document_type,password,city,phone_number, credentialId: email};
    this.usersService.createUser(user);
    this.usersService.printUser(user);

    this.usersService.createUser(user).subscribe((response) => {
      if(response.msg == "ok" ){
        console.log("El usuario fue creado")
      }
      console.log('Server response', response.msg);
    });
  }
}
