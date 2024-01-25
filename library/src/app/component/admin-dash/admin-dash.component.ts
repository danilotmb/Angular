import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/model/author';
import { AuthorService } from 'src/app/service/author.service';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component(
  {
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
  }
)
export class AdminDashComponent implements OnInit
{
  //attributi
  authors:Author[] | undefined;
  serverError:any;
  authorFormVisible:boolean = false;
  authorToUpdate:Author | undefined;
  books:Book[] | undefined;
  bookFormVisible:boolean = false;
  bookToUpdate:Book | undefined;
  bookToUpdateCover:any;

  //costruttore 
  constructor (
      private authorService:AuthorService,
      private bookService:BookService){ }


  //metodo per gestire fase di inizializzazione
  ngOnInit(): void 
  {
    this.callGetApi()
  }

  //metodo per invocazione API di lettura
  callGetApi():void
  {
    this.authorService.getAuthors()
      .subscribe({
        next: response => {
          this.authors = response;
          //se la chiamata autori è avvenuta con successo, vado a fare la chiamata sui libri
          if(this.authors)
            this.bookService.getBooks()
              .subscribe({
                next:response => this.books = response,
                error: e => this.serverError = e.status
              })
        },
        error: e => this.serverError = e.status
      })
  }


  //metodo per attivare il form autore
  activateAuthorForm():void
  {
    this.authorFormVisible = true;
  }

  //metodo per attivare il form autore
  activateBookForm():void
  {
    this.bookFormVisible = true;
  }

  //metodo per disattivare form libri
  deactivateBookForm():void
  {
    this.bookFormVisible = false;
    this.bookToUpdate = undefined;
    this.bookToUpdateCover = undefined;
    this.callGetApi();
  }


   //metodo per attivare il from book in modalita modifica
   bookFormUpdate(book:Book):void
   {
     this.bookToUpdate = book;
     if(this.bookToUpdate.cover)
       this.bookToUpdateCover = this.bookToUpdate.cover;
     this.bookFormVisible = true;
   }

  //metodo per disattivare form autore
  deactivateAuthorForm():void
  {
    this.authorFormVisible = false;
    this.authorToUpdate = undefined;
    this.callGetApi();
  }

  //metodo per attivare il form autore in modalità modifica
  authorFormUpdate(author:Author):void
  {
    this.authorToUpdate = author;
    this.authorFormVisible = true;
  }


 
  
}
