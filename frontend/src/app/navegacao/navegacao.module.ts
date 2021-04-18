import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu/menu.component";
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuLoginComponent } from './menu-login/menu-login.component';

@NgModule({
    declarations:[
      MenuComponent,
      HomeComponent,
      FooterComponent,
      NotFoundComponent,
      MenuLoginComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      NgbModule
    ],
    exports: [
      MenuComponent,
      HomeComponent,
      FooterComponent,
      NotFoundComponent,
      MenuLoginComponent
    ]
})
export class NavegacaoModule {}
