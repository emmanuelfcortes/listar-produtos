import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { ProdutoComponent } from '../models/produto/produto.component';
import { SearchFields } from '../models/searchFields.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private MAX_PRODUCT_PRICE = 1000000;
  products: ProdutoComponent[] = [ 
    { name: "Divine Comedy", description: "bestseller of Dante Alighieri",image: "http://www.loyalbooks.com/image/detail/Divine-Comedy-Dante-Alighieri.jpg", price: 12.34 },
    { name: "Durvanier Coumedi", description: "bestseller of William Shakespeare",image: "https://fb2bookfree.com/uploads/posts/2017-03/thumbs/1488550339_9781435103849.jpg", price: 20.34 },
    { name: "Diuvaine Cumidi", description: "bestseller of William Shakespeare",image: "https://yes-pdf.com/images/covers/2020/November/5fb3f487dba06/9781840221664.jpg", price: 30.95 },
    { name: "Dom Casmurro", description: "bestseller of Machado de Assis",image: "https://livraria.camara.leg.br/image/cache/catalog/capas/Dom-Casmurro_capa-livraria-368x533.jpg", price: 150.34 },
    { name: "Othelo", description: "bestseller of William Shakespeare", image: "https://5.imimg.com/data5/VG/JC/GLADMIN-61154532/othello-william-shakespeare-book-500x500.jpg", price: 50.34 },
  ]
  productsFiltered : Observable <ProdutoComponent[]>;
  
  constructor() { }

  public getProducts(): Observable<ProdutoComponent[]>{
    this.productsFiltered = of(this.products);
    return this.productsFiltered;
  }
 
  public filterProductsBySearchFields(searchFields: SearchFields) : Observable<ProdutoComponent[]>{
    if(!searchFields.priceTo){
      console.log("Invalid priceTo. It will be defined to 1000000")
      searchFields.priceTo = this.MAX_PRODUCT_PRICE;
    }
    return of<ProdutoComponent[]> (  this.products.filter(
      (product: ProdutoComponent) => 
      product.name.toLocaleLowerCase().indexOf( searchFields.name.toLocaleLowerCase() ) > -1 
      && product.price >= searchFields.priceFrom
      && product.price <= searchFields.priceTo 
    ))}
}


