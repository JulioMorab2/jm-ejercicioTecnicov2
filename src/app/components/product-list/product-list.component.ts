import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list', //referenciar este componente en HTML
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
  products: any[] = []; // Esta variable almacenará los productos obtenidos de la API
  filteredProducts: any[] = []; // Productos filtrados para mostrar
  isLoading = true; // carga en true mientras se obtienen los datos  
  errorMessage: string = ''; // Para almacenar el mensaje de error
  searchTerm: string = ''; // Para búsqueda
  pageSize: number = 10; // número por defecto para la paginación


  constructor( private router: Router, private productService: ProductService) { } // Inyecta el servicio de productos
    
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data; // Asigna los datos obtenidos al array de productos
        this.filteredProducts = data;  // Inicia mostrando todos los productos para la búsqueda
        this.isLoading = false; // Establece a false cuando los datos se hayan cargado
      },
      error: (err) => {
        console.error(err); // Maneja posibles errores
        this.errorMessage = 'Error al cargar los productos';//error message
        this.isLoading = false; // Establece a false también en caso de error
      }
    });
  }

  goToAddProductForm() {
    console.log('Navegando a add-product');
    this.router.navigate(['/add-product']);
  }

  filterProducts(): void {
    // Filtra los productos basado en el término de búsqueda y luego aplica el tamaño de página
    let tempProducts = this.searchTerm ? this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    ) : this.products;
  
    this.filteredProducts = tempProducts.slice(0, this.pageSize);  // Se aplica pageSize
  }
  
  goToEditProductForm(productId: string) {
    this.router.navigate(['/edit-product', productId]);
  }
  
}

