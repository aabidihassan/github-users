import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../models/user.modele";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(environment.baseUrl);
  }

  public getUserByLogin(login: string): Observable<User> {
    return this.httpClient.get<User>(`${environment.baseUrl}${login}`)
  }
}
