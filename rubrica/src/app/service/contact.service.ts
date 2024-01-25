import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { Observable } from 'rxjs';
 

const API:string = "http://localhost:3000/contacts"


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  public getContacts():Observable<Contact[]>
  {
    return this.http.get<Contact[]>(API);
  }


  public createContact(contact:Contact):Observable<Contact>
  {
    return this.http.post<Contact>(API, contact);
  }

  public updateContact(contact:Contact):Observable<Contact>
  {
    return this.http.put<Contact>(API + "/" + contact.id, contact);
  }

  public deleteContact(id:any):Observable<any>
  {
    return this.http.delete<any>(API + "/" + id);
  }
}
