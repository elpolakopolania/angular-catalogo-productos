import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { ModalComponent } from '../../generals/modal/modal.component';
import {MatDialog} from '@angular/material/dialog';
import { SolicitudService } from '../../service/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {
  solicitud: any;
  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  identification = new FormControl('', [
    Validators.required, Validators.pattern("^[0-9]*$")
  ]);
  value: any;
  dateToPay: any;

  constructor(public dialog: MatDialog, private solicitudService: SolicitudService,) { }

  ngOnInit(): void {
  }

  solicitar(){
    // Validar form
    console.log(this.name.valid && this.email.valid && this.identification.valid);
    if(this.name.valid && this.email.valid && this.identification.valid){
      let bool = Boolean(Math.round(Math.random()));
      // Guardar en la DB
      this.solicitud = {
        "name": this.name.value,
        "email": this.email.value,
        "identification":  this.identification.value,
        "value": this.value,
        "dateToPay": this.dateToPay,
        "approved": bool,
        "paidOut": false
      };
      this.solicitudService.create(this.solicitud).subscribe((res) => console.log(res));
      this.modalConfirm(bool);
    }else{
      this.modalError();
    }
  }

  modalError() {
    this.dialog.open(ModalComponent, {
      data: {
        title: 'Error en el formulario',
        content: 'Existen campos incorrectos.',
      }
    });
  }



  modalConfirm(bool: Boolean){
    this.dialog.open(ModalComponent, {
      data: {
        title: 'Solicitud',
        content: 'Su solicitud ha sido ' + ((bool)?'aprobada':'rechazada'),
        solicitud: bool
      }
    });
  }

  getErrMsgEmail() {
    if (this.email.hasError('required')) {
      return 'El correo es requerido';
    }

    return this.email.hasError('email') ? 'No es un correo válido' : '';
  }

  getErrMsgName() {
    if (this.name.hasError('required')) {
      return 'El nombre es requerido';
    }
    return '';
  }

  getErrMsgIdentification() {
    if (this.identification.hasError('required')) {
      return 'La identificación es requerida';
    }
    return '';
  }

  valorSeleccionado(e:any){
    this.value = e.value;
    this.dateToPay = e.dateToPay;
  }

}
