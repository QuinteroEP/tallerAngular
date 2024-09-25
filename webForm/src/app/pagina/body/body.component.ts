import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { mergeMap, of } from 'rxjs';
import { Comentario } from 'src/app/models/comentarios';
import { Publicacion } from 'src/app/models/publicaciones';

import { Usuario } from 'src/app/models/usuarios';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  root_url = "https://dummyjson.com";
  txtUser: string = "";
  usuario: Usuario | null = null;
  publicaciones: Publicacion[] = [];

  constructor(private http: HttpClient) {}

  buscarUsuario() {
    this.http.get(`${this.root_url}/users/search?q=${this.txtUser}`).pipe(
      mergeMap((response: any) => {
        if (response.users && response.users.length > 0) {
          this.usuario = response.users[0];
          // Retorna un observable de la solicitud de publicaciones
          return this.http.get(`${this.root_url}/posts/user/${this.usuario!.id}`);
        } else {
          this.usuario = null;
          // Retorna un observable vacío para evitar el error
          return of({ posts: [] });
        }
      })
    ).subscribe({
      next: (postInfo: any) => {
        // Asegúrate de que accedes a los posts correctamente
        this.publicaciones = postInfo.posts;
        this.getComentariosParaPosts(this.publicaciones);
      },
      error: (err) => {
        console.error('Error fetching user or posts', err);
      }
    });
  }
  

  //No lo uso, ya guardo los post al buscar al usuario
  getPosts(userId: number) {
    this.http.get(`${this.root_url}/posts/user/${userId}`).subscribe({
      next: (postInfo: any) => {
        this.publicaciones = postInfo.map((post: Publicacion) => ({
          ...post,
          comentarios: post.comentarios || []  // Asegura que siempre sea un arreglo
        }));
      },
      error: (err) => {
        console.error('Error fetching posts', err);
      }
    });
  }
  
  
  

  getComentariosParaPosts(posts: Publicacion[]) {
    posts.forEach(post => {
      this.http.get<Comentario[]>(`${this.root_url}/comments/post/${post.id}`).subscribe({
        next: (comentarios: Comentario[]) => post.comentarios = comentarios
      });
    });
  }
}