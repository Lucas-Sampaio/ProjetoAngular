import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
})
export class DetalhesComponent implements OnInit {

  imagens: string = environment.imagemUrl;
  produto: Produto;

  constructor(private route: ActivatedRoute) {
    this.produto = this.route.snapshot.data['produto'];
  }

  ngOnInit(): void {
  }

}
