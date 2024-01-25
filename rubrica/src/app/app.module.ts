import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdminDashComponent } from './component/admin-dash/admin-dash.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContactsTableComponent } from './component/contacts-table/contacts-table.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AdminDashComponent,
    NavbarComponent,
    ContactsTableComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
