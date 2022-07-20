import { Component, OnInit } from '@angular/core';

import { Product } from '../../model/product';
import { ProductService } from '../../service/product.service';
import { MatTableDataSource } from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../generals/modal/modal.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public products: Product[];
  public displayedColumns: string[] = [
      'id', 'name', 'size', 
      'trademark', 'inventory_quantity', 
      'boarding_date', 'actions'
  ];
  public dataSource: MatTableDataSource<Product>;
  public datos: any;

  constructor(
    private productService: ProductService,
    public dialog: MatDialog
  ) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.inicializar();
  }

  modalError(res: any) {
    this.dialog.open(ModalComponent, {
      data: {
        title: res.info,
        content: '',
      },
    });
  }

  inicializar() {
    // Obtener el listado
    this.productService.getAll().subscribe((data) => {
      this.datos = data;
      this.dataSource = new MatTableDataSource(this.datos.data);
      console.log(this.datos.data);
    });
  }

  modalConfirm(bool: Boolean) {
    this.dialog.open(ModalComponent, {
      data: {
        title: 'Marca',
        content: bool
          ? 'La marca se eliminó exitosamente'
          : 'No se pudo eliminar la marca',
        solicitud: bool,
      },
    });
  }

  eliminar(el: any) {
    if (confirm('Está seguro de eliminar la marca ' + el.name)) {
      this.productService.delete(el.id).subscribe((res) => {
        this.inicializar();
        if (res.message != 'success') {
          this.modalError(res);
        } else {
          this.modalConfirm(true);
        }
      });
    }
  }
}
