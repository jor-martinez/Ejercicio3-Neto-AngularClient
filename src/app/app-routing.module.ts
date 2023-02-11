import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarEmailComponent } from './validarEmail/validar-email/validar-email.component';
import { AltaUsuarioComponent } from './altaUsuario/alta-usuario/alta-usuario.component';

const routes: Routes = [
  {path: 'email', component: ValidarEmailComponent},
  {path: 'usuario/alta', component: AltaUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
