import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

//SweetAlert2
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  form: FormGroup;
  name: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: this.name,
      email: this.email,
      message: this.message
    });
  }

  ngOnInit(): void {
  }

  mensaje(){
    Swal.fire('Enviado!', 'Te responderemos en breve', 'success');
  }
}
