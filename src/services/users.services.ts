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

  createUser(user: User): Observable<Response> {
    headers['x-token'] = this.accessService.userData.token
    return this.http.post<Response>(this.url, user,{headers});
  }

  updateUser(user: User): Observable<Response>{
    headers['x-token'] = this.accessService.userData.token
    const id: string = user.document ?? ""
    console.log(user)
    return this.http.put<Response>(this.url+`/${id}`, user,{headers});
  }

  deleteUser(email: string): Observable<Response> {
    return this.http.patch<Response>(`${environment.apiUrl}/account/${email}`, {},{headers});
  }

  getUser(id: string): Observable<Response>{
    headers['x-token'] = this.accessService.userData.token
    return this.http.get<Response>(this.url+`/${id}`,{headers});
  }

  getLoggedUser(){
    return this.getUser(this.accessService.userData?.document);
  }

  getUsers(): Observable<Response> {
    return this.http.get<Response>(this.url);
  }
}
