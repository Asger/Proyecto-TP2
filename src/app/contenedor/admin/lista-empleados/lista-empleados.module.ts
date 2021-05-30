import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaEmpleadosRoutingModule } from './lista-empleados-routing.module';
import { ListaEmpleadosComponent } from './lista-empleados.component';

import { MaterialModule } from 'src/app/material-module';

@NgModule({
  declarations: [ListaEmpleadosComponent],
  imports: [CommonModule, ListaEmpleadosRoutingModule, MaterialModule],
})
export class ListaEmpleadosModule {}
