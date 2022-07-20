import { Component, OnInit } from '@angular/core';

import { Trademark } from '../../model/trademark';
import { TrademarkService } from '../../service/trademark.service';
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
  public trademarks: Trademark[];
  public displayedColumns: string[] = ['id', 'name', 'reference', 'actions'];
  public dataSource: MatTableDataSource<Trademark>;
  public datos: any;

  constructor(
    private trademarkService: TrademarkService,
    public dialog: MatDialog
  ) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.inicializar();
  }

  modalError() {
    /*this.dialog.open(ModalComponent, {
      data: {
        title: 'No se puede pagar el prestamo',
        content: 'El valor del prestamo supera el capital base del banco.',
      },
    });*/
  }

  inicializar() {
    // Obtener el listado
    this.trademarkService
      .getAll()
      .subscribe((data) => {        
        this.datos = data;
        this.dataSource = new MatTableDataSource(this.datos.data);
        console.log(this.datos.data);
      });
  }

  nuevo(){

  }

  editar(el: any){
    console.log(el);
  }

  eliminar(el: any){
    console.log(el);
  }


}
