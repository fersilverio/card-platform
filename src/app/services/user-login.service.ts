import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ILoggedUser } from "../interfaces/logged-user.interface";
import { tap } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class UserLoginService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly router: Router
  ) { }

  login(email: string | null | undefined, password: string | null | undefined) {
    return this.httpClient.post<ILoggedUser>("http://localhost:8080/auth/login", { email: email, password: password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token);
        this.router.navigate(['/']);
      })
    ).subscribe();
  }

  logout() {
    sessionStorage.removeItem("auth-token");
    this.router.navigate(['/login']);
  }

  get isLogged(): boolean {
    return sessionStorage.getItem("auth-token") ? true : false;
  }
}
