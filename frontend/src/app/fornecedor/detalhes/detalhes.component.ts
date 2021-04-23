import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Fornecedor } from '../models/fornecedor';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
})
export class DetalhesComponent {

  fornecedor: Fornecedor = new Fornecedor();
  enderecoMap: any;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) {

    this.fornecedor = this.route.snapshot.data['fornecedor'];
    this.enderecoMap = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.google.com/maps/embed/v1/place?q=" +
      this.EnderecoCompleto() + "&key=AIzaSyD2YohK-eFDjgF9PiwxLcKyHWlRhVLlrZI")
  }


  public EnderecoCompleto(): string {
    let endereco = this.fornecedor.endereco;
    return endereco.logradouro + ", " + endereco.numero + " - "
      + "-" + endereco.bairro + ", " + endereco.cidade + " - " +
      endereco.estado;
  }
}
