import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { SearchFields } from '../../models/searchFields.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
  
  private searchFields: SearchFields = {name:"",priceFrom:0, priceTo:1000000};
  @Output()
  productNameSearch = new EventEmitter<SearchFields>();
  
  constructor(private productService:ProductService) { }
  
  ngOnInit() {
  }

  set searchName(value: string){
    this.searchFields.name = value;
    this.productNameSearch.emit(this.searchFields);  
  }

  set searchPriceFrom(value: number){
    this.searchFields.priceFrom = value;
    this.productNameSearch.emit(this.searchFields); 
  }

  set searchPriceTo(value: number){
    this.searchFields.priceTo = value;
    this.productNameSearch.emit(this.searchFields); 
  }

}

