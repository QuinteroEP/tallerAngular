import { Component, Input } from '@angular/core';
import { Usuario } from '../models/usuarios';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  @Input() usuario: Usuario | null = null;
}
