import { HttpClient, HttpHandler } from '@angular/common/http';
import { ApiService } from './../services/api.service';
import { SharedModule } from './../shared/shared.module';
import { TelaLoginComponent } from './tela-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: TelaLoginComponent
  },
];

@NgModule({
  declarations: [TelaLoginComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  providers: [ApiService, HttpClient]
})
export class TelaLoginRoutingModule { }
