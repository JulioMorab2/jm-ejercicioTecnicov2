import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // para solicitudes http
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // importa FormsModule para el uso de ngModel
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductListComponent,
    EditProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // import para solicitudes http
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,  // importa FormsModule
    MatMenuModule,
    MatButtonModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
