import { Component } from '@angular/core';
import { Product } from './model/product';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

//attributi
products:Product[]|undefined;
serverError:any;

//costruttore 
constructor (private productService:ProductService){ }

//metodo per gestire fase di inizializzazione
ngOnInit(): void 
{
  this.callGetApi()
}

//metodo per invocazione API di lettura
callGetApi():void
{
  this.productService.getProducts()
    .subscribe({
      next: response => this.products = response,
      error: e => this.serverError = e.status
    })
}

}
