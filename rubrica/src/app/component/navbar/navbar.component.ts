import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() contactForm = new EventEmitter();

  activateContactForm():void
  {
    this.contactForm.emit();
    
  }


}
