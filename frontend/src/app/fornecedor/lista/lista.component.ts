import { Component, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Fornecedor } from '../models/fornecedor';
import { FornecedorService } from '../services/fornecedor.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
})
export class ListaComponent implements OnInit {

  public fornecedores: Fornecedor[];
  errorMessage: string;

  constructor(private fornecedorService: FornecedorService) { }

  ngOnInit(): void {

    this.fornecedorService.obterTodos().pipe(
      switchMap((fornecedores) => this.fornecedores = fornecedores)
    )
  }

}
