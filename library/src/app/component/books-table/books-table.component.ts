import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/model/book';


@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.css']
})
export class BooksTableComponent 
{
  //attributi
  @Input() books:Book[] | undefined;
  @Output() update = new EventEmitter<Book>()


  //metodo per selezionare il libro da modificare
  selectBookToUpdate(book:Book):void
  {
    this.update.emit(book);
  }
  


}

