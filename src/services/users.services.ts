import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { User} from "../app/models/user";

@Injectable({
  providedIn: 'root'
})

export class UsersServices{

  constructor(
    private httpClient: HttpClient
  ) { }

  printUser(user:User){
    console.log(user)
  }

  createUser(user: User): Observable<any> {
    return this.httpClient.post('http://localhost:3000/users', user);
  }

  deleteUser(id:number):Observable<any> {
    return this.httpClient.post('http://localhost:3000/deleteu', id);
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>('http://localhost:3000/listu');
  }
}
