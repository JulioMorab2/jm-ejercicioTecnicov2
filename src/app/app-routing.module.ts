import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';//agregar una ruta para el componente AddProductComponent
import { ProductListComponent } from './components/product-list/product-list.component';

//rutas de la aplicación
const routes: Routes = [
  {path: '', redirectTo: 'product-list', pathMatch: 'full'},
  { path: 'product-list', component: ProductListComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
