import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SolicitudService } from '../../service/solicitud.service';
import { Solicitud } from '../../model/solicitud';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css'],
})
export class CapitalComponent implements OnInit {
  public pagados: Solicitud[];
  capitalBase = environment.capitalBase;
  public totalPrestado: any = 0;
  valorPrestado: any;
  constructor(private solicitudService: SolicitudService) {}

  ngOnInit(): void {
    // Calcular el total prestado
    this.solicitudService
      .getValues()
      .subscribe((data) => this.calcularTotalPrestado(data));
    this.solicitudService.valorPrestadoObservable.subscribe((res) => {
      this.totalPrestado = res;
    });
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
