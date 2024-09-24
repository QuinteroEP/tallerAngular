import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { mergeMap, Observable, of } from 'rxjs';
import { Post } from 'src/app/models/publicaciones';
import { Usuario } from 'src/app/models/usuarios';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  
  root_url="https://dummyjson.com"
  txtUser:string = "";

  constructor(private http: HttpClient){}

  posts: Post[] | null = null;
  usuario: Usuario | null = null;
  //user$: Observable<any> = new Observable();

  buscarUsuario(){
    this.http.get(`${this.root_url}/users/search?q=${this.txtUser}`).subscribe({
      next: (response: any) => {
        if (response.users && response.users.length > 0) {
          this.usuario = response.users[0];
          if (this.usuario?.id !== undefined) {
            console.log(this.usuario.id);
            this.getPost(this.usuario.id);
          }
        } else {
          this.usuario = null;
        }
        }
    })

    //this.getUserPosts()
  }

  getPost(id:number){
    console.log("Buscando Posts")
    this.http.get(this.root_url + 'posts/user/' + id).subscribe((postInfo: any) => {
      for(let i = 0; i < postInfo.length; i++){
        this.posts![i] = postInfo[i]
      }
    })
  }

  getUserPosts(){
    this.http.get<Usuario>(this.root_url + "/users/search?q=" + this.txtUser).pipe(
      mergeMap((userInfo: any) => {
        if(userInfo.length > 0){
          this.usuario = userInfo[0];
          return this.http.get<Post>(this.root_url + "/user/" + this.usuario!.id)
        }else{
          this.usuario = null;
          return of(0);
        }
      })
    ).subscribe((postInfo: any) => {
      this.posts![0] = postInfo[0];
    })
  }

}
