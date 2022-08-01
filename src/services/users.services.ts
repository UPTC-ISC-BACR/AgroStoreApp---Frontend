import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { User} from "../app/models/user";
import {environment} from "../environments/environment";
import {Response} from "../app/models/response";

@Injectable({
  providedIn: 'root'
})

export class UsersServices{

  url = `${environment.apiUrl}/users`;

  constructor(
    private http: HttpClient
) { }

  printUser(user:User){
    console.log(user)
  }

  createUser(user: User): Observable<any> {
    return this.http.post('http://localhost:3000/users', user);
  }

  deleteUser(id:number):Observable<any> {
    return this.http.post('http://localhost:3000/deleteu', id);
  }

  //getUsers(): Observable<Response> {
  //return this.http.get<Response>(this.url);
  //}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/listu');
  }
}
