import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BodyComponent } from './pagina/body/body.component';
import { PublicacionesComponent } from './pagina/publicaciones/publicaciones.component';
import { ComentariosComponent } from './pagina/comentarios/comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    PublicacionesComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
