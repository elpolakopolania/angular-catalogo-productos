import { Component, OnInit, Host } from '@angular/core';

import { Solicitud } from '../../model/solicitud';
import { SolicitudService } from '../../service/solicitud.service';
import { MatTableDataSource } from '@angular/material/table';
import { MontoComponent } from '../../generals/monto/monto.component';
import { environment } from 'src/environments/environment';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from '../../generals/modal/modal.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  public solicitudes: Solicitud[];
  public displayedColumns: string[] = [
    'id',
    'name',
    'identification',
    'value',
    'dateToPay',
    'approved',
    'paidOut',
    'actions',
  ];
  public dataSource: MatTableDataSource<Solicitud>;
  public pagados: Solicitud[];
  public totalPrestado: any = 0;
  public capitalBase = environment.capitalBase;
  @Host() private monto: MontoComponent;

  constructor(private solicitudService: SolicitudService, public dialog: MatDialog) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.inicializar();
  }

  pagar(row: any) {
    // Pagar solicitud
    if (this.totalPrestado + row.value > this.capitalBase) {
      this.modalError();
    } else {
      this.solicitudService
        .patch(row.id, { paidOut: true })
        .subscribe((res) => console.log(res));
      this.inicializar();
    }
  }

  modalError() {
    this.dialog.open(ModalComponent, {
      data: {
        title: 'No se puede pagar el prestamo',
        content: 'El valor del prestamo supera el capital base del banco.',
      }
    });
  }

  inicializar() {
    // Obtener el listado
    this.solicitudService
      .getAll()
      .subscribe((data) => (this.dataSource = new MatTableDataSource(data)));
    // Calcular el total prestado
    this.solicitudService
      .getValues()
      .subscribe((data) => this.calcularTotalPrestado(data));
  }

  calcularTotalPrestado(solicitudes: any) {
    this.pagados = solicitudes;
    this.totalPrestado = 0;
    this.pagados.forEach(
      (row) => (this.totalPrestado = this.totalPrestado + row.value)
    );
    this.solicitudService.enviarValorPrestado(this.totalPrestado);
  }
}
