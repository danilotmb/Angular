import { Injectable } from '@angular/core';
import { Author } from '../model/author';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API:string = "http://localhost:3000/authors"

@Injectable(
  {
    providedIn: 'root'
  })
export class AuthorService 
{
  constructor(private http:HttpClient) { }

  //metodo per ottenere l'elenco degli autori
  public getAuthors():Observable<Author[]>
  {
    return this.http.get<Author[]>(API);
  }

  //metodo per registrare un nuovo autore
  public createAuthor(author:Author):Observable<Author>
  {
    return this.http.post<Author>(API, author);
  }

  //metodo per modificare i dati di un autore
  public updateAuthor(author:Author):Observable<Author>
  {
    return this.http.put<Author>(API + "/" + author.id, author);
  }

  //metodo per cancellare un autore
  public deleteAuthor(id:any):Observable<any>
  {
    return this.http.delete<any>(API + "/" + id);
  }
}
