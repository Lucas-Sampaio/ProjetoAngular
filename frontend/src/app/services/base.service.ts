import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError } from "rxjs";
import { LocalStorageUtils } from "../utils/localstorage";

export abstract class BaseService {

  protected UrlServiceV1: string = "https://localhost:5001/api/v1";
  public LocalStorage = new LocalStorageUtils();

  protected obterHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  protected extractData(response: any) {
    return response.data || {};
  }

  protected serviceError(response: Response | any) {
    let customeError: string[] = [];

    if (response instanceof HttpErrorResponse) {
      if (response.statusText === "Unknown Error") {
        customeError.push("Ocorreu um erro desconhecido");
        response.error.errors = customeError;
      }
    }
    console.error(response);
    return throwError(response);
  }
}
