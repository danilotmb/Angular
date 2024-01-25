import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Author } from 'src/app/model/author';
import { AuthorService } from 'src/app/service/author.service';


@Component({
  selector: 'app-autors-table',
  templateUrl: './autors-table.component.html',
  styleUrls: ['./autors-table.component.css']
})
export class AutorsTableComponent 
{
  //attributi
  @Input() authors:Author[]|undefined;
  @Output() update = new EventEmitter<Author>();
  @Output() delete = new EventEmitter();

  //costruttore
  constructor(private authorService:AuthorService) { }

  //metodo per selezionare autore da modificare
  selectAuthorToUpdate(author:Author):void
  {
    this.update.emit(author);
  }

  //metodo per cancellare un autore
  deleteAuthor(authorId:any):void
  {
    this.authorService.deleteAuthor(authorId)
      .subscribe({
        next: response => this.delete.emit(),
        error: e => console.log(e.status)
        
      })
  }

  
}
