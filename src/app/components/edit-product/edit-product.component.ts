import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';  // Importa el servicio de productos

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  // Se inicializa un objeto de producto con campos vacíos
  product = {
    id: '',
    name: '',
    description: '',
    logo: '',
    date_release: '',
    date_revision: ''
  };

  // Se inyectan el servicio de productos, la ruta activa y el router en el constructor
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    // Obtiene el ID del producto desde la URL
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      // Llama al servicio para obtener los datos del producto por ID
      this.productService.getProductById(productId).subscribe({
        next: (data) => this.product = data,
        error: (err) => console.error('Error al cargar producto:', err)
      });
    } else {
      console.error('ID de producto no válido');
      this.router.navigate(['/product-list']); // Redirige a la lista de productos si el ID no es válido
    }
  }

  // Método que se llama al enviar el formulario
  onSubmit() {
    // Verifica que todos los campos del producto estén llenos
    if (!this.product.name || !this.product.description || !this.product.logo || !this.product.date_release || !this.product.date_revision) {
      alert('Por favor, asegúrese de que todos los campos están correctamente llenos y validados.');
      return;
    }
    // Llama al servicio para actualizar el producto y maneja la respuesta
    this.productService.updateProduct(this.product).subscribe({
      next: (response) => {
        console.log('Producto actualizado:', response);
        alert('Producto actualizado con éxito!');
        this.router.navigate(['/product-list']); // Redirige a la lista de productos después de la actualización
      },
      error: (err) => {
        console.error('Error al actualizar producto:', err);
        alert('Error al actualizar el producto. Por favor, intente de nuevo.');
      }
    });
  }

  // Método para reiniciar el formulario
  resetForm(form: NgForm) {
    form.resetForm();
    if (this.product.id) {
      // Llama al servicio para obtener los datos del producto por ID
      this.productService.getProductById(this.product.id).subscribe({
        next: (data) => this.product = data,
        error: (err) => console.error('Error al cargar producto:', err)
      });
    }
  }

  // Método para navegar de regreso a la lista de productos
  goBack() {
    this.router.navigate(['/product-list']);
  }
}
