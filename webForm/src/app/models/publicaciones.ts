import { Comentario } from "./comentarios";



export interface Publicacion {
  id: number;
  title: string;
  body: string;
  userId: number;
  reactions: {
    likes: number;
    dislikes: number;
  };
  comentarios: Comentario[];
}
