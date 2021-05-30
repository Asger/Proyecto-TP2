import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { IEmpleado } from 'src/app/interfaces/empleado';
import { EmpleadoService } from 'src/app/service/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.scss']
})
export class CrearEmpleadoComponent implements OnInit {
  form:FormGroup;

  constructor(private fb:FormBuilder, private SvcEmpleado:EmpleadoService, private router:Router, private _snackBar:MatSnackBar) { 
    this.form = this.fb.group({
      empleadoId: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarEmpleado(){
    const empleado: IEmpleado = {
      empleadoid: this.form.value.empleadoId,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      correo: this.form.value.correo,  
    }
    this.SvcEmpleado.agregarEmpleado(empleado);
    this.router.navigate(['/admin/listaempleados'])

    this._snackBar.open('El empleado fue agregado con éxito', '',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

}
