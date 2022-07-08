import { Pipe, PipeTransform } from '@angular/core';
import { Solicitud } from '../models/solicitud';

@Pipe({
  name: 'solicitud'
})
export class SolicitudPipe implements PipeTransform {

  transform(solicitud: Solicitud[], searchText: string): any {
    if (searchText == null) return solicitud;
    return solicitud.filter(p =>
      p.titulo.toLowerCase()
     .indexOf(searchText.toLowerCase()) !== -1);
    
    }

}
