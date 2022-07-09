import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegSolicitudComponent } from './reg-solicitud/reg-solicitud.component';
import { ShowSolicitudComponent } from './show-solicitud/show-solicitud.component';
import { UploadFileComponent } from './upload-file/upload-file.component';

const routes: Routes = [
                          {path: '', component: RegSolicitudComponent},
                          {path: 'solicitud', component: ShowSolicitudComponent},
                          {path: 'cargar', component: UploadFileComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
