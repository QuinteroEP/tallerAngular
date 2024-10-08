import { Component, Input } from '@angular/core';
import { Publicacion } from 'src/app/models/publicaciones';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})

export class PublicacionesComponent {
  @Input() publicaciones: Publicacion[] = [];

  // Método para alternar entre mostrar u ocultar comentarios
  toggleComentarios(publicacion: Publicacion) {
    publicacion.mostrarComentarios = !publicacion.mostrarComentarios;

    console.log(publicacion.comentarios)
    console.log("publicacion.comentarios.length: " + publicacion.comentarios.length)
  }

  ngOnChanges() {
    console.log('Posts:', this.publicaciones);
  }
}
