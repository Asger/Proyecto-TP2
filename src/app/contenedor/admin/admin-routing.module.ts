import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path:'', component:AdminComponent,
    children:[
      {
        path: 'graficos', 
        loadChildren: () => 
        import ('./graficos/graficos.module').then(
          m => m.GraficosModule
        )  
      },
      {
        path: 'listaempleados', 
        loadChildren: () => 
        import ('./lista-empleados/lista-empleados.module').then(
          m => m.ListaEmpleadosModule
        )  
      },
      {
        path:'', redirectTo:'graficos', pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
