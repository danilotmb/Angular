import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent 
{
  @Input() isVisible:boolean = false;
  @Output() close = new EventEmitter();
  @Input() contact:Contact | undefined;

  constructor(private contactService:ContactService){ }

  formManager(form:NgForm) : void
  {
    if(this.contact)
      this.updateContact(form);
    else
      this.createContact(form);
  }

  createContact(form:NgForm) : void
  {
    let contact:Contact = {
      name:form.value["name"],
      lastname:form.value["lastname"],
      phone:form.value["phone"],
      mail:form.value["mail"]
    };
    this.contactService.createContact(contact)
      .subscribe({
        next: response => {
          console.log(response);
          this.closeForm(form);
        },
        error: e => console.log(e.status)
      })
  }

  updateContact(form:NgForm):void
  {
    if(this.contact)
    {
      this.contact.name = form.value["name"];
      this.contact.lastname = form.value["lastname"];
      this.contact.phone = form.value["phone"];
      this.contact.mail = form.value["mail"];
      this.contactService.updateContact(this.contact)
        .subscribe({
          next: response => {
            this.contact = undefined;
            this.closeForm(form);
          },
          error: e => console.log(e.status)
        });
    }
  }

  closeForm(form:NgForm): void
  {
    form.reset();
    this.close.emit();
  }

}
