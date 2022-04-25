import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ModificarComponent } from './componentes/modificar/modificar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

/* Importando da biblioteca http  as rotinas httpClientModule */
import {HttpClientModule} from '@angular/common/http';
/* Importando a biblioteca forms que possibilita realizarmos rotinas com os formulários */
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    HeaderComponent,
    FooterComponent,
    ModificarComponent,
    InicioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
