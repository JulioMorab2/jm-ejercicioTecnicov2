import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // para solicitudes http
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './components/add-product/add-product.component'; // importa FormsModule para el uso de ngModel

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // import para solicitudes http
    AppRoutingModule,
    FormsModule,  // importa FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
