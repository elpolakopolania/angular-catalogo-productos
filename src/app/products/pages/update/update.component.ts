import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../../service/product.service';
import { TrademarkService } from 'src/app/trademarks/service/trademark.service';
import { ModalComponent } from '../../generals/modal/modal.component';
import { Product, CreateProduct, UpdateProduct } from '../../model/product';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DateRange } from '@angular/material/datepicker';
import { Trademark } from 'src/app/trademarks/model/trademark';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  public product: Product;
  public createProduct: CreateProduct;
  public updateProduct: UpdateProduct;
  public trademarks: Trademark[];

  name = new FormControl('', [Validators.required]);
  size = new FormControl('', [Validators.required]);
  observation = new FormControl('', [Validators.required]);
  trademarks_id = new FormControl('', [Validators.required]);
  inventory_quantity = new FormControl('', [Validators.required]);
  boarding_date = new FormControl('', [Validators.required]);

  public id: bigint;

  constructor(
    public dialog: MatDialog,
    private productService: ProductService,
    private trademarkService: TrademarkService,    
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    // Obtener informacion de la marca
    this.productService.get(this.id).subscribe((res) => {
      this.name.setValue(res.data.name);
      this.size.setValue(res.data.size);
      this.observation.setValue(res.data.observation);
      this.trademarks_id.setValue(res.data.trademarks_id);
      this.inventory_quantity.setValue(res.data.inventory_quantity);
      this.boarding_date.setValue(res.data.boarding_date);

    });

    // Ontener el listado de las marcas
    this.trademarkService.getAll().subscribe((res) => {
      this.trademarks = res.data;
    });
  }

  regresar() {
    this.location.back();
  }

  editar() {
    // Validar form
    if (
        this.name.valid && this.size.valid && this.observation.valid && 
        this.trademarks_id.valid && this.inventory_quantity.valid && this.boarding_date.valid
        ) {
      this.createProduct = {
        name: this.name.value == null ? '' : this.name.value,
        size: this.size.value == null ? '' : this.size.value,
        observation: this.observation.value == null ? '' : this.observation.value,
        trademarks_id: this.trademarks_id.value == null ? '' : this.trademarks_id.value,
        inventory_quantity: this.inventory_quantity.value == null ? '' : this.inventory_quantity.value,
        boarding_date: this.boarding_date.value == null ? '' : this.boarding_date.value,
      };

      this.productService
        .update(this.id, this.createProduct)
        .subscribe((res) => {
          if (res.message == 'success') {
            this.modalConfirm(true);
          } else {
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

  getErrMsgSize() {
    if (this.size.hasError('required')) {
      return 'La talla es requerida';
    }
    return '';
  }

  getErrMsgName() {
    if (this.name.hasError('required')) {
      return 'El nombre es requerido';
    }
    return '';
  }

  getErrMsgObservation() {
    if (this.observation.hasError('required')) {
      return 'La observación es requerida';
    }
    return '';
  }

  getErrMsgInventory_quantity() {
    if (this.inventory_quantity.hasError('required')) {
      return 'La cantidad en el inventario es requerida';
    }
    return '';
  }

  getErrMsgBoarding_date() {
    if (this.boarding_date.hasError('required')) {
      return 'La fecha de embarque es requerida';
    }
    return '';
  }
}
