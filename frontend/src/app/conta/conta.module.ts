import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';

import { ContaRoutingModule } from './conta.route';
import { ContaAppComponent } from './conta.app.component';
import { ContaService } from './services/conta.service';
import { CustomFormsModule } from 'ng2-validation';
import { ContaGuard } from './services/conta.guard';
@NgModule({
  declarations: [
    ContaAppComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ContaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomFormsModule
  ],
  providers: [
    ContaService,
    ContaGuard
  ]
})
export class ContaModule { }
