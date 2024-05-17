import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Importa HttpClient y HttpHeaders
import { Observable } from 'rxjs';  // Observable es utilizado para manejar respuestas asíncronas

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros/bp/products';  // URL de la API

  /**
   * Represents a ProductService.
   * @constructor
   */
  constructor(private http: HttpClient) { }  // Injecta HttpClient en el servicio

  getProducts(): Observable<any> {  // Método que retorna la lista de productos desde la API
    // Crear un objeto HttpHeaders y añadir el encabezado 'authorId'
    const headers = new HttpHeaders({
      'authorId': '1'  // identificador unico del autor de la solicitud
    });

    return this.http.get(this.apiUrl, { headers: headers });  // Realiza una solicitud HTTP GET
  }

  addProduct(product: any): Observable<any> {  // Método para agregar un nuevo producto a la API
    const headers = new HttpHeaders({
      'authorId': '1',  // identificador unico del autor de la solicitud
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl, product, { headers: headers });  // Realiza una solicitud HTTP POST
  }

  getProductById(id: string): Observable<any> {  // Método para obtener un producto por su ID desde la API
    const headers = new HttpHeaders({
      'authorId': '1'  // identificador unico del autor de la solicitud
    });
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url, { headers: headers });  // Realiza una solicitud HTTP GET
  }

  updateProduct(product: any): Observable<any> {  // Método para actualizar un producto en la API
    const headers = new HttpHeaders({
      'authorId': '1',  // identificador unico del autor de la solicitud
      'Content-Type': 'application/json'
    });
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put(url, product, { headers: headers });  // Realiza una solicitud HTTP PUT
  }
}
