import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-extrato',
  templateUrl: './tela-extrato.component.html',
  styleUrls: ['./tela-extrato.component.scss']
})
export class TelaExtratoComponent implements OnInit {

  saldo:any=""
  saque: boolean=false
  deposito: boolean=false
  placeholders: string=""
  formGroup: FormGroup=new FormGroup({})
  label: string=""

  constructor(private service: ApiService) { }

  async ngOnInit() {
    this.formGroup.addControl("valor", new FormControl())
    this.saldo=await this.service.extrato()

  }

  setDeposito(){
    this.deposito= true
    this.saque= false
    this.placeholders="Digite o valor para depósito"
    this.label= "Efetuar deposito!"

  }
  setSaque(){
    this.saque= true
    this.deposito= false
    this.placeholders="Digite o valor para saque"
    this.label= "Efetuar saque!"

  }

  async efetuarTransacao(){

    try {
      if(this.saque){
        let transacao:any= {
          valor: 0,
          cpf: ""
        }
        transacao.valor=Number(this.formGroup.get("valor")?.value)
        await this.service.saque(transacao)
      }else {
        let transacao:any= {
          valor: 0,
          cpf: ""
        }
        transacao.valor=Number(this.formGroup.get("valor")?.value)
        await this.service.deposito(transacao)
      }
      this.saldo = await this.service.extrato()
    } catch(erro){
      console.log(erro)
    }
  }
}
