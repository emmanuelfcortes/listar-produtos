import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  
export class SearchFields{
    public name: string;
    public priceFrom: number;
    public priceTo: number;  
}