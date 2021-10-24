import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "login",
    loadChildren:() => import("./tela-login/tela-login.module")
    .then((m) => m.TelaLoginModule)
  },
  {
    path: "extrato",
    loadChildren: () => import("./tela-extrato/tela-extrato.module")
    .then((m) => m.TelaExtratoModule),
  },
  {
    path: "cadastro",
    loadChildren: () => import("./tela-cadastro/tela-cadastro.module")
    .then((m) => m.TelaCadastroModule),
  },
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
