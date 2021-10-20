import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'bancotivic';
  formGroup: FormGroup = new FormGroup({})

  ngOnInit(){
    this.formGroup.addControl('cpf', new FormControl())
    this.formGroup.addControl('senha', new FormControl())
  }

  login(){
    console.log(this.formGroup.value)
  }
}
