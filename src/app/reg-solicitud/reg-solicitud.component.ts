import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CoAutor } from '../models/coautor';
import { Colaborador } from '../models/colaborador';
import { Memoria } from '../models/memoria';
import { ObraInv } from '../models/obraInv';
import { Solicitud } from '../models/solicitud';
import { RegSolicitudService } from './reg-solicitud.service';

@Component({
  selector: 'app-reg-solicitud',
  templateUrl: './reg-solicitud.component.html',
  styleUrls: ['./reg-solicitud.component.css']
})
export class RegSolicitudComponent implements OnInit {
  
  tipo = "Tipo de Obra";
  fuente = "Fuente de financiación";
  publico = "publicoObra";
  formato = "formatoObra";
  otro!: string;
  otroF!: string;
  solicitud!: Solicitud;
  coautorA!: CoAutor;
  coautorB!: CoAutor;
  colaboradorA!: Colaborador;
  colaboradorB!: Colaborador;
  obraInv!: ObraInv;
  memoria!: Memoria;
  pregunta1 = "Ediciones Unicesar";
  pregunta2 = "Otra Editorial";
  pregunta3 = "Nueva Edicion";
  pregunta4 = "OtraEditEdic";
  pregunta5 = "OtroFormato";

  constructor(private solicitudService: RegSolicitudService, private modalService: NgbModal) { }

  ngOnInit() {
    this.solicitud = new Solicitud();
    this.coautorA = new CoAutor();
    this.coautorB = new CoAutor();
    this.colaboradorA = new Colaborador();
    this.colaboradorB = new Colaborador();
    this.obraInv = new ObraInv();
    this.memoria = new Memoria();
  }

  add(){

    this.solicitud.coautorA = this.coautorA;
    this.solicitud.coautorB = this.coautorB;
    this.solicitud.colaboradorA = this.colaboradorA;
    this.solicitud.colaboradorB = this.colaboradorB;
    this.solicitud.tipo = this.tipo;
    this.obraInv.fuenteFin = this.fuente;
    this.solicitud.obraInv = this.obraInv;
    this.solicitud.memoria = this.memoria;
    this.solicitud.pregunta1 = this.pregunta1;
    this.solicitud.pregunta2 = this.pregunta2;
    this.solicitud.pregunta3 = this.pregunta3;
    this.solicitud.pregunta4 = this.pregunta4;
    this.solicitud.pregunta5 = this.pregunta5;
    if(this.publico=='otro'){
      this.solicitud.publico = this.otro;
    }else{
      this.solicitud.publico = this.publico;
    }
    if(this.formato=='otro'){
      this.solicitud.formato = this.otroF;
    }else{
      this.solicitud.formato = this.formato;
    }
    alert(this.solicitudService.post(this.solicitud));

  }
}
