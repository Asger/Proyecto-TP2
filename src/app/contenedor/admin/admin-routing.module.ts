import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';

const routes: Routes = [
  {
    path:'', component:AdminComponent,
    children:[
      {
        path: 'listaempleados', 
        loadChildren: () => 
        import ('./lista-empleados/lista-empleados.module').then(
          m => m.ListaEmpleadosModule
        )  
      },
      {
        path: 'agregarempleado',component: CrearEmpleadoComponent 
      },
      {
        path:'', redirectTo:'listaempleados', pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
