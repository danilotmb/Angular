import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashComponent } from './component/admin-dash/admin-dash.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { BooksTableComponent } from './component/books-table/books-table.component';
import { AutorsTableComponent } from './component/authors-table/autors-table.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorFormComponent } from './component/author-form/author-form.component';
import { FormsModule } from '@angular/forms';
import { BookFormComponent } from './component/book-form/book-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashComponent,
    NavbarComponent,
    BooksTableComponent,
    AutorsTableComponent,
    AuthorFormComponent,
    BookFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
