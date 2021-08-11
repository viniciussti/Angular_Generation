import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://blogpessoalteixeira.herokuapp.com/postagem')
  }

  postPostagem(postagem: Postagem) : Observable<Postagem>{
    return this.http.post<Postagem>('https://blogpessoalteixeira.herokuapp.com/postagem', postagem)
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(`https://blogpessoalteixeira.herokuapp.com/postagem/${id}`)
  }

  putPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.put<Postagem>('https://blogpessoalteixeira.herokuapp.com/postagem', postagem)
  }

  deletePostagem(id: number){
    return this.http.delete(`https://blogpessoalteixeira.herokuapp.com/postagem/${id}`)
  }


}
