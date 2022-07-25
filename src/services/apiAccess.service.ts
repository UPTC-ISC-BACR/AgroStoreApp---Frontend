import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../environments/environment";
import {map} from "rxjs/operators";
import {Account} from "../app/models/Account";

const httpOptions = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiAccessService{

  url = `${environment.apiUrl}/Acceso`;

  private userSubject: BehaviorSubject<Account>;
  public user: Observable<Account>;

  public  get userData(): Account{
    return this.userSubject.value;
  }

  constructor(private _http: HttpClient) {
    this.userSubject = new BehaviorSubject<Account>(JSON.parse(localStorage.getItem('account')!));
    this.user = this.userSubject.asObservable();
  }

  login(account: Account): Observable<Response>{
    return this._http.post<Response>(this.url,account, httpOptions)/*.pipe(
      map(res =>{
        if (res.code === 200){
          //const user: Account = res;
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user)
        }
        return res;
      })
    );*/
  }

  logout() {
    // removes user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null!);
  }
}
