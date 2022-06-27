import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  @Input()
  name: string;

  @Input()
  description: string;

  @Input()
  image: string;

  @Input()
  price: number;  
  constructor( ) {
   }

}
