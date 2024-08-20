import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ILoggedUser } from "../interfaces/logged-user.interface";
import { BehaviorSubject, tap } from "rxjs";
import { api } from "../../environments/environment";

@Injectable()
export class UserLoginService {

  private loggedIn = new BehaviorSubject<boolean>(this.isLogged);

  isLoggedIn$ = this.loggedIn.asObservable();

  constructor(
    private readonly httpClient: HttpClient,
  ) { }

  login(email: string | null | undefined, password: string | null | undefined) {
    return this.httpClient.post<ILoggedUser>(`${api.emerald}/auth/login`, { email: email, password: password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token);
        this.loggedIn.next(true);
      })
    )
  }

  logout() {
    sessionStorage.removeItem("auth-token");
    this.loggedIn.next(false);
  }

  get isLogged(): boolean {
    return sessionStorage.getItem("auth-token") ? true : false;
  }
}
