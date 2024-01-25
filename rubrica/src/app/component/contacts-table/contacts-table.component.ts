import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';


@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css']
})
export class ContactsTableComponent 
{
  @Input() contacts:Contact[]|undefined;
  @Output() update = new EventEmitter<Contact>();
  @Output() delete = new EventEmitter<Contact>();

  constructor(private contactService:ContactService) { }

  selectContactToUpdate(contact:Contact):void
  {
    this.update.emit(contact);
  }

  deleteContact(contactId: any): void {
    this.contactService.deleteContact(contactId)
      .subscribe({
        next: (deletedContact: Contact) => this.delete.emit(deletedContact),
        error: e => console.log(e.status)
      });
  }

}
