import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
    this.userForm = fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      typedoc: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      cellphone: ['', Validators.required]
    })
  }

  ngOnInit(): void {}

  saveUser(): void {
    const document = this.userForm.get('id')?.value;
    const fullName = this.userForm.get('name')?.value;
    const documentType = this.userForm.get('typedoc')?.value;
    const email = this.userForm.get('email')?.value;
    const password = this.userForm.get('password')?.value;
    const city = this.userForm.get('city')?.value;
    const phoneNumber = this.userForm.get('cellphone')?.value;
    const address = this.userForm.get('address')?.value;
    const user: User = {document: document.toString(),fullName,documentType,password,city,phoneNumber: phoneNumber.toString(), email, address};
    this.usersService.printUser(user);
    this.usersService.createUser(user).subscribe(res =>{
      console.log(res)
    })
  }
}
