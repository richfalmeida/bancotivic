import { SharedModule } from './../shared/shared.module';
import { ApiService } from './../services/api.service';
import { TelaExtratoComponent } from './tela-extrato.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"", component: TelaExtratoComponent

  }
];

const components=[
  TelaExtratoComponent
]

@NgModule({
  declarations: [...components],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
  providers: [ApiService]
})
export class TelaExtratoRoutingModule { }
