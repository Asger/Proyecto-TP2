import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './contenedor/home/home.component';
import { SociosComponent } from './contenedor/socios/socios.component';
import { ContactoComponent } from './contenedor/contacto/contacto.component';
import { ServiciosComponent } from './contenedor/servicios/servicios.component';
import { PreguntasFrecuentesComponent } from './contenedor/preguntas-frecuentes/preguntas-frecuentes.component';
import { SobreNosotrosComponent } from './contenedor/sobre-nosotros/sobre-nosotros.component';

import { MaterialModule } from './material-module';
import { ContenedorUsuariosComponent } from './contenedor/contenedor-usuarios/contenedor-usuarios.component';

import { ReactiveFormsModule } from '@angular/forms';
import { CursosComponent } from './contenedor/cursos/cursos.component';
import { AvisosComponent } from './contenedor/avisos/avisos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuprincipalComponent,
    HomeComponent,
    SociosComponent,
    ContactoComponent,
    ServiciosComponent,
    PreguntasFrecuentesComponent,
    SobreNosotrosComponent,
    ContenedorUsuariosComponent,
    CursosComponent,
    AvisosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
