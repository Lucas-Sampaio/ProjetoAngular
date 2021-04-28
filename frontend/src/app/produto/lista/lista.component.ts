import { Component, OnInit } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';
import { registerLocaleData } from '@angular/common';
import { environment } from 'src/environments/environment';

registerLocaleData(localePt, 'pt');

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent implements OnInit {

  public produtos: Produto[];
  errorMessage: string;
  imagens = environment.imagemUrl;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.obterTodos()
      .subscribe(
        produtos => this.produtos = produtos,
        error => this.errorMessage);
  }

}
