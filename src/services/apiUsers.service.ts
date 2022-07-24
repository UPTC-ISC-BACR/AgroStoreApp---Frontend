import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {

  //todo: Actualizar usando la ruta de la api
  url = '${environment.apiUrl}/Usuarios';

  constructor(private _http: HttpClient) {
  }

  //Todo: Conectar a backend, adaptandolo a la repuseta de la api
  getUser(docType: string, docNumber: string): Observable<Response> {
    let headers = httpOptions.headers
    let params = new HttpParams()
      .append("documentType", docType)
      .append("documentNumber", docNumber)
    return this._http.get<Response>(this.url, {headers, params});
  }
}
