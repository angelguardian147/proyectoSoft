import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegSolicitudComponent } from './reg-solicitud.component';
import { RegSolicitudService } from './reg-solicitud.service';



@NgModule({
  declarations: [RegSolicitudComponent],
  imports: [
    CommonModule
  ],
  providers: [RegSolicitudService]
})
export class RegSolicitudModule { }
