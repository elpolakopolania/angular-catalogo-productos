import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TrademarkService } from '../../service/trademark.service';
import { ModalComponent } from '../../generals/modal/modal.component';
import { Trademark, CreateTrademark, UpdateTrademark } from '../../model/trademark';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  public trademark: Trademark;
  public createTrademark: CreateTrademark;
  public updateTrademark: UpdateTrademark;

  public name = new FormControl('', [Validators.required]);
  public reference = new FormControl('', [
    Validators.required,
    Validators.maxLength(20),
  ]);

  public id: bigint;

  constructor(
    public dialog: MatDialog,
    private trademarkService: TrademarkService,
    private location: Location,
    private route:ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    // Obtener informacion de la marca
    this.trademarkService
        .get(this.id)
        .subscribe((res) => {
          this.name.setValue(res.data.name);
          this.reference.setValue(res.data.reference);
        });
  }

  regresar() {
    this.location.back();
  }

  editar() {
    // Validar form
    if (this.name.valid && this.reference.valid) {

      this.createTrademark = {
        name: this.name.value == null ? '' : this.name.value,
        reference: this.reference.value == null ? '' : this.reference.value,
      };

      this.trademarkService
        .update(this.id, this.createTrademark)
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
        content: bool
          ? 'La marca ha sido editada exitosamente'
          : 'No se pudo editar la marca',
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

}
