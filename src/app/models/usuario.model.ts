import { Conta } from "./conta.model";

export class Usuario {
  cpf: string | undefined;
  senha: string | undefined;
  conta: Conta | undefined;

  constructor(cpf?: string, senha?: string, conta?: Conta){
    this.cpf = cpf;
    this.senha = senha;
    this.conta = conta;
  }
}
