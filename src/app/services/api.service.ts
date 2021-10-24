import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  addNovoUsuario(novoUsuario: { usuario: any; nome: any; senha: any; }) {
    throw new Error('Method not implemented.');
  }
  private api: string = environment.api
  constructor(private _http: HttpClient) { }


  public login (usuario: any){
    return this._http.post(`${this.api}/auth/login`, usuario)
      .toPromise().then(usuarioLogado => usuarioLogado)

  }
  public cadastro (usuario: Usuario){
    return this._http.post(`${this.api}/auth/cadastrar`, usuario)
      .toPromise().then(usuarioLogado => usuarioLogado)

  }

  public extrato(){
    let cpf= localStorage.getItem("cpf")
    return this._http.get(`${this.api}/conta/saldo/${cpf}`)
      .toPromise().then(saldo=>saldo)
  }

  public saque(transacao: any){
    transacao.cpf= localStorage.getItem("cpf")
    console.log(transacao)
    return this._http.post(`${this.api}/conta/sacar`, transacao)
    .toPromise().then(saldo=>saldo)
  }
  public deposito(transacao: any){
    transacao.cpf= localStorage.getItem("cpf")
    return this._http.post(`${this.api}/conta/depositar`, transacao)
    .toPromise().then(saldo=>saldo)
  }
}
