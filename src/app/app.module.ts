
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidarEmailComponent } from './validarEmail/validar-email/validar-email.component';
import { AltaUsuarioComponent } from './altaUsuario/alta-usuario/alta-usuario.component';
import { NavBarComponent } from './navBar/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidarEmailComponent,
    AltaUsuarioComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
