import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { EditarComponent } from './editar/editar.component';
import { ExcluirComponent } from './excluir/excluir.component';
import { ListaComponent } from './lista/lista.component';
import { NovoComponent } from './novo/novo.component';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProdutoService } from './services/produto.service';
import { ProdutoRoutingModule } from './produto.route';
import { ProdutoResolve } from './services/produto.resolve';
import { ProdutoGuard } from './services/produto.guard';
import { ProdutoAppComponent } from './produto.app.component';
import { ImageCropperModule } from 'ngx-image-cropper';



@NgModule({
  declarations: [
    ProdutoAppComponent,
    DetalhesComponent,
    EditarComponent,
    ExcluirComponent,
    ListaComponent,
    NovoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    NgBrazil,
    TextMaskModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule
  ],
  providers: [
    ProdutoService,
    ProdutoResolve,
    ProdutoGuard
  ]
})
export class ProdutoModule { }
