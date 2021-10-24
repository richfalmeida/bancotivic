import { ApiService } from './../services/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.scss']
})
export class TelaLoginComponent implements OnInit {
  title: string = 'bancotivic';
  formGroup: FormGroup = new FormGroup({})

  constructor(private router: Router, private service: ApiService){}

  ngOnInit(){
    this.formGroup.addControl('cpf', new FormControl())
    this.formGroup.addControl('senha', new FormControl())
  }

  async login(){
    let usuario: any = await this.service.login(this.formGroup.value)
    if(usuario){
      localStorage.setItem("cpf", usuario.cpf)
      this.router.navigate(["./extrato"])
    }

  }

}
