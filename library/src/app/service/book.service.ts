import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const API:string = "http://localhost:3000/books"

@Injectable({
  providedIn: 'root'
})
export class BookService 
{

  constructor(private http:HttpClient) { }

  //metodo per ottenere elenco libri
  public getBooks():Observable<Book[]>
  {
    return this.http.get<Book[]>(API);
  }

  //metodo per registrare un nuovo libro
  public createBook(book:Book):Observable<Book>
  {
    return this.http.post<Book>(API,book);
  }

  //metodo per modificare i dati di un libro
  public updateBook(book:Book):Observable<Book>
  {
    return this.http.put<Book>(API + "/" + book.id, book);
  }
}
