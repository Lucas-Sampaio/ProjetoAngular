import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LocalStorageUtils } from "src/app/utils/localstorage";

@Injectable()
export class FornecedorGuard implements CanActivate {

  localSorageUtils = new LocalStorageUtils();

  constructor(private router: Router) { }

  canActivate(routeAc: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (!this.localSorageUtils.obterTokenUsuario()) {
      this.router.navigate(["/conta/login"]);
    }

    let user = this.localSorageUtils.obterUsuario();
    let claim: any = routeAc.data[0];

    if (claim !== undefined) {
      let claim = routeAc.data[0]['claim'];

      if (claim) {
        if (!user.claims) {
          this.navegarAcessoNegado();
        }

        let userClaims = user.claims.find(x => x.type === claim.nome);

        if (!userClaims) {
          this.navegarAcessoNegado();
        }

        let valoresClaim = userClaims.value as string;

        if (!valoresClaim.includes(claim.valor)) {
          this.navegarAcessoNegado();
        }
      }
    }

    return true;
  }

  navegarAcessoNegado() {
    this.router.navigate(['/acesso-negado']);
  }
}
