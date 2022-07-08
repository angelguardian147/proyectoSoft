import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../models/solicitud';
import { RegSolicitudService } from '../reg-solicitud/reg-solicitud.service';

@Component({
  selector: 'app-show-solicitud',
  templateUrl: './show-solicitud.component.html',
  styleUrls: ['./show-solicitud.component.css']
})
export class ShowSolicitudComponent implements OnInit {

  searchText!:string;
  solicitudes!: Solicitud[];

  constructor(private solicitudServive: RegSolicitudService) { }

  ngOnInit() {
    this.solicitudes = this.solicitudServive.get();
  }
}
