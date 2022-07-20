import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../../service/product.service';
import { ModalComponent } from '../../generals/modal/modal.component';
import { Product, CreateProduct, UpdateProduct } from '../../model/product';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  product: Product;
  createProduct: CreateProduct;
  updateProduct: UpdateProduct;

  name = new FormControl('', [Validators.required]);
  size = new FormControl('', [Validators.required]);
  observation = new FormControl('', [Validators.required]);
  trademarks_id = new FormControl('', [Validators.required]);
  inventory_quantity = new FormControl('', [Validators.required]);
  boarding_date = new FormControl('', [Validators.required]);

  constructor(
    public dialog: MatDialog,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  regresar() {
    this.location.back();
  }

  crear() {
    // Validar form
    if (this.name.valid && this.size.valid) {
      this.createProduct = {
        name: this.name.value == null ? '' : this.name.value,
        size: this.size.value == null ? '' : this.size.value,
        observation: this.observation.value == null ? '' : this.observation.value,
        trademarks_id: this.trademarks_id.value == null ? '' : this.trademarks_id.value,
        inventory_quantity: this.inventory_quantity.value == null ? '' : this.inventory_quantity.value,
        boarding_date: this.boarding_date.value,
      };

      this.productService.create(this.createProduct).subscribe((res) => {
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
        title: 'Producto',
        content: bool
          ? 'El producto ha sido creada exitosamente'
          : 'No se pudo crear el producto',
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
