import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto/models/produto';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
})
export class ListaProdutosComponent implements OnInit {

  imagens: string = environment.imagemUrl;
  
  @Input()
  produtos: Produto[];
  constructor() { }

  ngOnInit(): void {
  }

}
