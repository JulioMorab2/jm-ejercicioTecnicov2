import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';  // Importa el servicio de productos
import { Router } from '@angular/router';  // Importa el router para la navegación

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  // Se inicializa un objeto de producto con campos vacíos
  product = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: ''
  };

  // Se inyectan el servicio de productos y el router en el constructor
  constructor(private productService: ProductService, private router: Router) {}

  // Método que se llama al enviar el formulario
  onSubmit() {
    // Verifica que todos los campos del producto estén llenos
    if (!this.product.id || !this.product.name || !this.product.description || !this.product.logo || !this.product.date_release || !this.product.date_revision) {
      alert('Por favor, asegúrese de que todos los campos están correctamente llenos y validados.');
      return;
    }
    // Llama al servicio para agregar el producto y maneja la respuesta
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

  // Método para reiniciar el formulario
  resetForm(form: NgForm) {
    form.resetForm();
    // Reinicia los valores del objeto producto
    this.product = {
      id: '',
      name: '',
      description: '',
      logo: '',
      date_release: '',
      date_revision: ''
    };
  }

  // Método para navegar a la lista de productos
  goToProductList() {
    this.router.navigate(['/product-list']);
  }
}
