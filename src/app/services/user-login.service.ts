import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ILoggedUser } from "../interfaces/logged-user.interface";
import { tap } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class UserLoginService {
  constructor(private readonly httpClient: HttpClient, private readonly router: Router) { }

  login(email: string | null | undefined, password: string | null | undefined) {
    console.log("entrei aqui no login");
    return this.httpClient.post<ILoggedUser>("http://localhost:8080/auth/login", { email: email, password: password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token);
        sessionStorage.setItem("auth-name", value.name);
        this.router.navigate(['/']);
      })
    )
  }

  logout() {
    sessionStorage.removeItem("auth-token")
    sessionStorage.removeItem("auth-name")
  }
}
