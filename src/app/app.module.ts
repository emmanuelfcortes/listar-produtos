import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ProdutoComponent } from './models/produto/produto.component';
import { SearchComponent } from './components/search/search.component';
//import { SearchFields } from './components/search/searchFields.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
