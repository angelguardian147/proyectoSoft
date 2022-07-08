import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegSolicitudComponent } from './reg-solicitud/reg-solicitud.component';
import { ShowSolicitudComponent } from './show-solicitud/show-solicitud.component';
import { SolicitudPipe } from './pipe/solicitud.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegSolicitudComponent,
    ShowSolicitudComponent,
    SolicitudPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
