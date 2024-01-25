import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Observable } from 'rxjs';


const API:string = "http://localhost:3000/products"


@Injectable(
  {
  providedIn: 'root'
})


export class ProductService 
{

  constructor(private http:HttpClient) { }

  //metodo per ottenere l'elenco degli autori
  public getProducts():Observable<Product[]>
  {
    return this.http.get<Product[]>(API);
  }
}
