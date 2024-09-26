import { Component, Input } from '@angular/core';
import { Comentario } from 'src/app/models/comentarios';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent {
  @Input() comentarios: Comentario[] = []

  ngOnChanges() {
    console.log('Received comentarios:', this.comentarios);
  }
}
