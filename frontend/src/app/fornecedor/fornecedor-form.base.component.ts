import { ElementRef } from "@angular/core";
import { AbstractControl, FormGroup, Validators } from "@angular/forms";
import { MASKS, NgBrazilValidators } from "ng-brazil";
import { FormBaseComponent } from "../base-components/form-base.component";
import { CepConsulta } from "./models/endereco";
import { Fornecedor } from "./models/fornecedor";


export class FornecedorFormBase extends FormBaseComponent {


  public MASKS = MASKS;

  errors: any[] = [];
  fornecedorForm: FormGroup;
  fornecedor: Fornecedor = new Fornecedor();

  textDocumento: string = 'CPF'

  constructor() {
    super();
    this.validationMessages = {
      nome: {
        required: 'Informe o Nome',
      },
      documento: {
        required: 'Informe o Documento',
        cpf: 'CPF em formato inválido',
        cnpj: 'CNPJ em formato inválido'
      },
      logradouro: {
        required: 'Informe o Logradouro',
      },
      numero: {
        required: 'Informe o Número',
      },
      bairro: {
        required: 'Informe o Bairro',
      },
      cep: {
        required: 'Informe o CEP',
        cep: 'CEP em formato inválido'
      },
      cidade: {
        required: 'Informe a Cidade',
      },
      estado: {
        required: 'Informe o Estado',
      }
    };
    super.configurarMensagensValidacaoBase(this.validationMessages);
  }

  protected configurarValidacaoFormulario(formInputElements: ElementRef[]) {
    super.configurarValidacaoFormularioBase(formInputElements, this.fornecedorForm);
  }

  preencherEnderecoConsulta(cepConsulta: CepConsulta) {
    this.fornecedorForm.patchValue({
      endereco: {
        logradouro: cepConsulta.logradouro,
        bairro: cepConsulta.bairro,
        cep: cepConsulta.cep,
        cidade: cepConsulta.localidade,
        estado: cepConsulta.uf
      }
    })
  }

  protected tipoFornecedorChange(formInputElements: ElementRef[]) {
    //monitora a alteração de valores
    this.tipoFornecedorForm()?.valueChanges
      .subscribe(() => {
        this.trocarValidacaoDocumento();
        this.configurarValidacaoFormulario(formInputElements);
        super.validarFormulario(this.fornecedorForm);
      });
  }

   protected trocarValidacaoDocumento() {
    if (this.tipoFornecedorForm()?.value === "1") {
      let doc = this.obterDocumento();
      doc?.clearValidators();
      doc?.setValidators([Validators.required, NgBrazilValidators.cpf]);
      this.textDocumento = "CPF";
    } else {
      let doc = this.obterDocumento();
      doc?.clearValidators();
      doc?.setValidators([Validators.required, NgBrazilValidators.cnpj]);
      this.textDocumento = "CNPJ";
    }
  }

  tipoFornecedorForm(): AbstractControl | null {
    return this.fornecedorForm.get('tipoFornecedor');
  }

  private obterDocumento(): AbstractControl | null {
    return this.fornecedorForm.get('documento');
  }

}
