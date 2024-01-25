import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent 
{
  //attributi
  @Output() authorForm = new EventEmitter();
  @Output() bookForm = new EventEmitter();

  //metodo per emissione evento apertura form autore
  activateAuthorForm():void
  {
    this.authorForm.emit();
    
  }

  //metodo per emissione evento apertura form libri
  activateBookForm():void
  {
    this.bookForm.emit();
  }
}
