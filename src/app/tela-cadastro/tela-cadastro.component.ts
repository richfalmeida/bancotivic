import { Usuario } from './../models/usuario.model';
import { ApiService } from './../services/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conta } from '../models/conta.model';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.scss']
})
export class TelaCadastroComponent implements OnInit {
  title: string = 'bancotivic';
  formGroup: FormGroup = new FormGroup({})

  constructor(private router: Router, private service: ApiService){}

  ngOnInit(){
    this.formGroup.addControl('cpf', new FormControl())
    this.formGroup.addControl('senha', new FormControl())
  }


  async cadastro(){

    let usuario = this.buildUsuario()

    let resposta: any = await this.service.cadastro(usuario)
    console.log(resposta)
    if(usuario){
      this.router.navigate(["./login"])
    }
  }

  buildUsuario(): Usuario {
    let usuario = new Usuario()
    usuario.cpf = this.formGroup.get("cpf")?.value
    usuario.senha = this.formGroup.get("senha")?.value

    let conta = new Conta()
    conta.cpf = usuario.cpf

    usuario.conta = conta

    return usuario
  }
}

