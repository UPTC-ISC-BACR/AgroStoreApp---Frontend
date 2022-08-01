import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from "../app/models/user";
import {environment} from "../environments/environment";
import {Response} from "../app/models/response";
import {ApiAccessService} from "./apiAccess.service";

const headers = {
  'Content-Type': 'application/json',
  'x-token': ''
};

@Injectable({
  providedIn: 'root'
})
export class UsersServices {

  url = `${environment.apiUrl}/users`;

  constructor(
    private http: HttpClient,
    private accessService: ApiAccessService
  ) {}

  printUser(user: User) {
    console.log(user)
  }

  createUser(user: User): Observable<any> {
    headers['x-token'] = this.accessService.userData.token
    return this.http.post(this.url, user,{headers});
  }

  deleteUser(id: number): Observable<any> {
    return this.http.post('http://localhost:3000/deleteu', id);
  }

  getUsers(): Observable<Response> {
    return this.http.get<Response>(this.url);
  }
}
