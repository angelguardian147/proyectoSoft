import { Injectable } from '@angular/core';
import { Solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root'
})
export class RegSolicitudService {

  constructor() { }

  get(): Solicitud[] {
    return JSON.parse(localStorage.getItem('solicitudes') || '[]');
  }

  post(solicitud: Solicitud): string {
    let solicitudes: Solicitud[] = [];
    if (this.get() != null) {
      solicitudes = this.get();
    }
    for (let i = 0; i < solicitudes.length; i++) {
      if(solicitudes[i].titulo === solicitud.titulo){

        return "Ya existe una solicitud para esta obra";
      }
    }
        solicitudes.push(solicitud);
        localStorage.setItem('solicitudes', JSON.stringify(solicitudes));
        return "Solicitud Registrada";
      }
}
