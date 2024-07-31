import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ILoggedUser } from "../interfaces/logged-user.interface";
import { tap } from "rxjs";

@Injectable()
export class UserLoginService {
  constructor(private readonly httpClient: HttpClient) { }

  login(email: string, password: string) {
    return this.httpClient.post<ILoggedUser>("http://localhost:8080/auth/login", { email: email, password: password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("auth-name", value.name)
      })
    )
  }

  logout() {
    sessionStorage.removeItem("auth-token")
    sessionStorage.removeItem("auth-name")
  }
}
