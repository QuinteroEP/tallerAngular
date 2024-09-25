import { Component, Input } from '@angular/core';
import { Publicacion } from 'src/app/models/publicaciones';


@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent {
  @Input() publicaciones: Publicacion[] = [];
}
