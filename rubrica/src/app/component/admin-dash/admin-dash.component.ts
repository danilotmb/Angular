import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/model/contact';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})

export class AdminDashComponent implements OnInit
{


   //attributi
   contacts:Contact[] | undefined;
   serverError:any;
   contactFormVisible:boolean = false;
   contactToUpdate:Contact | undefined;

   constructor (private contactService:ContactService){ }

  ngOnInit(): void 
  {
    this.callGetApi()
  }

  callGetApi():void
  {
    this.contactService.getContacts()
      .subscribe({
        next: response => this.contacts = response,
        error: e => this.serverError = e.status
      })
  }

  activateContactForm():void
  {
    this.contactFormVisible = true;
  }

  deactivateContactForm():void
  {
    this.contactFormVisible = false;
    this.contactToUpdate = undefined;
    this.callGetApi();
  }

  contactFormUpdate(contact:Contact):void
  {
    this.contactToUpdate = contact;
    this.contactFormVisible = true;
  }

}
