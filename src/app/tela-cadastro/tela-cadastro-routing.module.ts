import { HttpClient, HttpHandler } from '@angular/common/http';
import { ApiService } from './../services/api.service';
import { SharedModule } from './../shared/shared.module';
import { TelaCadastroComponent } from './tela-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: TelaCadastroComponent
  },
];

@NgModule({
  declarations: [TelaCadastroComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  providers: [ApiService, HttpClient]
})
export class TelaCadastroRoutingModule { }
