export class Endereco {
  id: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
  fornecedorId: string;
}

export class CepConsulta {
  logradouro: string;
  complemento: string;
  bairro: string;
  cep: string;
  localidade: string;
  uf: string;
}
