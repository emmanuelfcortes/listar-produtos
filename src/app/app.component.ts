import { Component, OnInit } from '@angular/core';
import { ProdutoComponent } from './models/produto/produto.component';
import { SearchFields } from './models/searchFields.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'listar-produtos';
  private products: ProdutoComponent[];
  private productsFiltered: ProdutoComponent[];
  private prodService: ProductService = new ProductService();;
  
  constructor(productService:ProductService){
    productService.getProducts().subscribe({ 
        next: (products) => {
          this.productsFiltered = products;
          this.products = products;
        },
      error: (e)=> console.log(e)
    });
  }
  ngOnInit(): void {
    
  }
  filterProductBySearchFields(searchFields: SearchFields){ 
    this.prodService.filterProductsBySearchFields(searchFields).subscribe({
      next: (productsFiltered) => this.productsFiltered = productsFiltered,
      error: (e)=> console.log(e)
    })  
  }
   
}
