import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Fornecedor } from '../models/fornecedor';
import { FornecedorService } from '../services/fornecedor.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
})
export class DetalhesComponent implements OnInit {

  fornecedor: Fornecedor = new Fornecedor();

  constructor(
    private route: ActivatedRoute,
    private fornecedorService: FornecedorService) { }

  ngOnInit(): void {
    let fornecedor$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.fornecedorService.obterPorId(params.get('id'))
      )
    )
    fornecedor$.subscribe(fornecedor => this.fornecedor = fornecedor);
  }

}
