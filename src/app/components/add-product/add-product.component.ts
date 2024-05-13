// add-product.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html', //agregar la plantilla del componente
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: ''
  };

  constructor(private productService: ProductService) {}

  onSubmit() {
    if (!this.product.id || !this.product.name || !this.product.description || !this.product.logo || !this.product.date_release || !this.product.date_revision) {
      alert('Por favor, asegúrese de que todos los campos están correctamente llenos y validados.');
      return;
    }
    this.productService.addProduct(this.product).subscribe({
      next: (response) => {
        console.log('Producto agregado:', response);
        alert('Producto agregado con éxito!');
      },
      error: (err) => {
        console.error('Error al agregar producto:', err);
        alert('Error al agregar el producto. Por favor, intente de nuevo.');
      }
    });
  }

  resetForm(form: NgForm) {
    form.resetForm();
    this.product = {
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: ''
    };
  }
}
