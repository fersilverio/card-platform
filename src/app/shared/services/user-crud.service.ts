import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { api } from "../../../environments/environment";
import { IUserRegistry } from "../interfaces/user.interface";

@Injectable()
export class UserCrudService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  createAssociateUser(input: IUserRegistry) {
    return this.httpClient.post<IUserRegistry>(`${api.emerald}/auth/register`, input);
  }
}
