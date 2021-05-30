import { Injectable } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listaempleados: IEmpleado[] = [
    { empleadoid: '123err21', nombre: 'Elias', apellido: 'Uribe', correo: 'hgfgs@gmail.com' },
    { empleadoid: '5434wefg', nombre: 'Pedro', apellido: 'Uribe', correo: 'qw2342@gmail.com' },
    { empleadoid: '25hiy442', nombre: 'Lucas', apellido: 'Saez', correo: 'retyqw@gmail.com' },
    { empleadoid: '2346sdaa', nombre: 'Matias', apellido: 'Neuman', correo: '123132@gmail.com' },
  ];

  constructor() { }

  getEmpleado(){
    return this.listaempleados.slice();
  }

  eliminarEmpleado(index:number){
    this.listaempleados.splice(index, 1);
  }

  agregarEmpleado(empleado:IEmpleado){
    this.listaempleados.unshift(empleado);
  }
}
