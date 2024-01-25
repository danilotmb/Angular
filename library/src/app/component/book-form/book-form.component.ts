import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Author } from 'src/app/model/author';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent 
{
  //attributi
  @Input() isVisible:boolean = false;
  @Input() authors:Author[]|undefined;
  @Input() bookCover:any;
  @Output() close = new EventEmitter();
  @Input() book:Book | undefined;

  //costruttore 
  constructor(private bookService:BookService){ }

  //metodo per gestire il form
  formManager(form:NgForm):void
  {
    if(this.book)
      this.updateBook(form);
    else
      this.createBook(form);

  }

  //metodo per creare un nuovo libro
  createBook(form:NgForm):void
  {
    let bookAuthor:Author|undefined = this.selectAuthorById(form.value["author"]);
    if(bookAuthor)
    {
      let cover = this.bookCover ? this.bookCover : null;
      let book:Book = {
        title:form.value["title"],
        plot:form.value["plot"],
        year:form.value["year"],
        price:form.value["price"],
        quantity:form.value["quantity"],
        cover:cover,
        author:bookAuthor

      };

      this.bookService.createBook(book)
        .subscribe({
          next: response => this.closeForm(form),
          error: e => console.log(e.status)
        })
    }
  }

  //metodo per ottenere un autore in base al suo id
  selectAuthorById(authorId:string):Author|undefined
  {
    if(this.authors)
    {
      let index = this.authors.findIndex(a => a.id == authorId);
      return this.authors[index];
    }
    return undefined;
  }

  //metodo per upload della copertina libro
  uploadCover(event:any):void
  {
    let file:File = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.bookCover = reader.result as string;
      event.target.value = "";
    };

  }

  //metodo per gestire la chiusura del form
  closeForm(form:NgForm):void
  {
    form.reset();
    this.bookCover = undefined;
    this.book = undefined;
    this.close.emit();
  }


  //metodo per modificare i dati di un libro
  updateBook(form:NgForm):void
  {
    let bookAuthor:Author|undefined = this.selectAuthorById(form.value["author"]);
    if(bookAuthor && this.book)
    {
      let cover = this.bookCover ? this.bookCover : null;
      this.book.title = form.value["title"];
      this.book.author = bookAuthor;
      this.book.year = form.value["year"];
      this.book.price = form.value["price"];
      this.book.quantity = form.value["quantity"];
      this.book.plot = form.value["plot"];
      this.book.cover = cover;
      this.bookService.updateBook(this.book)
        .subscribe({
          next: response => this.closeForm(form),
          error: e => console.log(e.status)
        })

    }
  }
}
