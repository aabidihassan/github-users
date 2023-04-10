import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {forkJoin, Observable} from "rxjs";
import {User} from "../../models/user.model";
import {environment} from "../../../environments/environment";
import {Profile} from "../../models/profile.model";
import {Repository} from "../../models/repository.model";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'token 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'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  public getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.baseUrl}/users`, this.httpOptions);
  }

  public getUserByLogin(login: string): Observable<Profile> {
    return this.httpClient.get<Profile>(`${environment.baseUrl}/users/${login}`, this.httpOptions)
  }

  public getFollowersByLogin(login: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.baseUrl}/users/${login}/followers`, this.httpOptions)
  }

  public getReposByLogin(login: string): Observable<Repository[]> {
    return this.httpClient.get<Repository[]>(`${environment.baseUrl}/users/${login}/repos`, this.httpOptions)
  }

  getRepoDataByLoginAndRepo(login: string, repo: string): Observable<{ commits: number, issues: number, pulls: number }> {
    const options = {headers: this.httpOptions.headers, responseType: 'json' as const};

    const commits$ = this.httpClient.get(`${environment.baseUrl}/repos/${login}/${repo}/commits`, options).pipe(map((response: any) => response.length));
    const issues$ = this.httpClient.get(`${environment.baseUrl}/repos/${login}/${repo}/issues`, options).pipe(map((response: any) => response.length));
    const pulls$ = this.httpClient.get(`${environment.baseUrl}/repos/${login}/${repo}/pulls`, options).pipe(map((response: any) => response.length));

    return forkJoin([commits$, issues$, pulls$]).pipe(
      map(([commits, issues, pulls]) => ({commits, issues, pulls}))
    );
  }
}
