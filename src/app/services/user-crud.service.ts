import { Injectable } from "@angular/core";
import { IUserRegistry } from "../interfaces/user.interface";
import { HttpClient } from "@angular/common/http";
import { api } from "../../environments/environment";

@Injectable()
export class UserCrudService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  createAssociateUser(input: IUserRegistry) {
    console.log("Cheguei aqui e estou pronto para a api");
    return this.httpClient.post<IUserRegistry>(`${api.emerald}/associate-users`, input);
  }
}