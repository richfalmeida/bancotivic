export class Conta{
  cpf: string | undefined;
  saldo: number | undefined;

  constructor(cpf?: string, saldo?: number){
    this.cpf=cpf;

    if(saldo)
      this.saldo=saldo;
    else
      this.saldo=0;
  }
}

