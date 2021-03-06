import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisosComponent } from './contenedor/avisos/avisos.component';
import { ContactoComponent } from './contenedor/contacto/contacto.component';
import { ContenedorUsuariosComponent } from './contenedor/contenedor-usuarios/contenedor-usuarios.component';
import { CursosComponent } from './contenedor/cursos/cursos.component';
import { HomeComponent } from './contenedor/home/home.component';
import { PreguntasFrecuentesComponent } from './contenedor/preguntas-frecuentes/preguntas-frecuentes.component';
import { ServiciosComponent } from './contenedor/servicios/servicios.component';
import { SobreNosotrosComponent } from './contenedor/sobre-nosotros/sobre-nosotros.component';
import { SociosComponent } from './contenedor/socios/socios.component';

const routes: Routes = [
  {
    path:'',component:ContenedorUsuariosComponent,
    children:[ 
      {
        path:'home',component:HomeComponent
      },
      {
        path:'servicios',component:ServiciosComponent
      },
      {
        path:'cursos',component:CursosComponent
      },
      {
        path:'avisos',component:AvisosComponent
      },
      {
        path:'preguntas',component:PreguntasFrecuentesComponent
      },
      {
        path:'sobrenosotros',component:SobreNosotrosComponent
      },
      {
        path:'socios',component:SociosComponent
      },
      {
        path:'contacto',component:ContactoComponent
      },
      {
        path:'',redirectTo:'home',pathMatch:'full'
      }
    ]
  },
  {
    path:'admin', loadChildren:() => import('./contenedor/admin/admin.module').then(x => x.AdminModule)
  },
  {
    path:'**',redirectTo:'home',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
