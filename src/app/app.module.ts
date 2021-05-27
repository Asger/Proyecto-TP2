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
import { ProductosComponent } from './contenedor/productos/productos.component';
import { ServiciosComponent } from './contenedor/servicios/servicios.component';
import { PreguntasFrecuentesComponent } from './contenedor/preguntas-frecuentes/preguntas-frecuentes.component';
import { SobreNosotrosComponent } from './contenedor/sobre-nosotros/sobre-nosotros.component';

import { MaterialModule } from './material-module';
import { ContenedorUsuariosComponent } from './contenedor/contenedor-usuarios/contenedor-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuprincipalComponent,
    HomeComponent,
    SociosComponent,
    ContactoComponent,
    ProductosComponent,
    ServiciosComponent,
    PreguntasFrecuentesComponent,
    SobreNosotrosComponent,
    ContenedorUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
