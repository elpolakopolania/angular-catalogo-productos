import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TrademarkService } from '../../service/trademark.service';
import { ModalComponent } from '../../generals/modal/modal.component';
import { Trademark, CreateTrademark, UpdateTrademark } from '../../model/trademark';
import { Location } from '@angular/common'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  trademark: Trademark;
  createTrademark: CreateTrademark;
  updateTrademark: UpdateTrademark;

  name = new FormControl('', [Validators.required]);
  reference = new FormControl('', [Validators.required, Validators.maxLength(20)]);

  constructor(
    public dialog: MatDialog,
    private trademarkService: TrademarkService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  regresar(){
    this.location.back();
  }

  crear() {
    // Validar form
    if (this.name.valid && this.reference.valid) {
      this.createTrademark = {
        name: (this.name.value == null)? '': this.name.value,
        reference: (this.reference.value == null)? '': this.reference.value
      }
      
      this.trademarkService.create(this.createTrademark)
        .subscribe((res) => {
          if(res.message == 'success'){
            this.modalConfirm(true);
          }else{
            this.modalError();
          }
          
        });
    } else {
      this.modalError();
    }
  }

  modalError() {
    this.dialog.open(ModalComponent, {
      data: {
        title: 'Error en el formulario',
        content: 'Existen campos incorrectos.',
      },
    });
  }

  modalConfirm(bool: Boolean) {
    this.dialog.open(ModalComponent, {
      data: {
        title: 'Marca',
        content: (bool)? 'La marca ha sido creada exitosamente': 'No se pudo crear la marca',
        solicitud: bool,
      },
    });
  }

  getErrMsgReference() {
    if (this.reference.hasError('required')) {
      return 'La referencia es requerida';
    }
    return '';
  }

  getErrMsgName() {
    if (this.name.hasError('required')) {
      return 'El nombre es requerido';
    }
    return '';
  }

  valorSeleccionado(e: any) {
    /*this.value = e.value;
    this.dateToPay = e.dateToPay;*/
  }
}
