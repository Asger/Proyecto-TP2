import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IEmpleado } from 'src/app/interfaces/empleado';
import { EmpleadoService } from 'src/app/service/empleado.service';


@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.scss'],
})
export class ListaEmpleadosComponent implements OnInit {

  listaempleados: IEmpleado[] = [];
  
  displayedColumns: string[] = ['empleadoid', 'nombre', 'apellido', 'correo', 'acciones'];
  dataSource!: MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private SvcEmpleado:EmpleadoService, private _snackBar:MatSnackBar) {}

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  cargarEmpleados(){
    this.listaempleados=this.SvcEmpleado.getEmpleado();
    this.dataSource = new MatTableDataSource(this.listaempleados);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarEmpleado(index:number){
    this.SvcEmpleado.eliminarEmpleado(index);
    this.cargarEmpleados();

    this._snackBar.open('El empleado fue eliminado con éxito', '',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
