import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaEmpleadosRoutingModule } from './lista-empleados-routing.module';
import { ListaEmpleadosComponent } from './lista-empleados.component';


@NgModule({
  declarations: [
    ListaEmpleadosComponent
  ],
  imports: [
    CommonModule,
    ListaEmpleadosRoutingModule
  ]
})
export class ListaEmpleadosModule { }
