import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Author } from 'src/app/model/author';
import { AuthorService } from 'src/app/service/author.service';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent 
{
  //attributi
  @Input() isVisible:boolean = false;
  @Output() close = new EventEmitter();
  @Input() author:Author | undefined;

  //costruttore
  constructor(private authorService:AuthorService){ }
  

  //metodo per la gestione del form
  formManager(form:NgForm) : void
  {
    if(this.author)
      this.updateAuthor(form);
    else
      this.createAuthor(form);
  }

  //metodo per creare un nuovo autore
  createAuthor(form:NgForm) : void
  {
    let author:Author = {
      name:form.value["name"],
      lastname:form.value["lastname"]
    };
    this.authorService.createAuthor(author)
      .subscribe({
        next: response => {
          console.log(response);
          this.closeForm(form);
        },
        error: e => console.log(e.status)
      })
  }

  //metodo per modificare i dati dell'autore
  updateAuthor(form:NgForm):void
  {
    if(this.author)
    {
      this.author.name = form.value["name"];
      this.author.lastname = form.value["lastname"];
      this.authorService.updateAuthor(this.author)
        .subscribe({
          next: response => {
            this.author = undefined;
            this.closeForm(form);
          },
          error: e => console.log(e.status)
        });
    }
  }


  //metodo per chiudere il pop up del form
  closeForm(form:NgForm): void
  {
    form.reset();
    this.close.emit();
  }

}
