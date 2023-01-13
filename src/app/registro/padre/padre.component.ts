import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  [x:string]:any;
  nombre: string = '';
  dni: string = '';
  estado: string = '';

  data_padre: any;

  registrar() {
    this.data_padre = {
      nombre: this.nombre,
      dni: this.dni,
      estado: this.estado,
    };
  }
  constructor(private formBuilder: FormBuilder){}

  registroForm1 = this.formBuilder.group({
    nomb:['', [Validators.required]], 
    dni1: ['', {validators: [Validators.required,Validators.pattern('/^\d{8}$/')]}],
    estad: ['', [Validators.required]],

      });


  get nomb(){ return this.registroForm1.get('nomb'); }
  get dni1(){ return this.registroForm1.get('dni1'); }
  get estad(){ return this.registroForm1.get('estad'); }

}
