import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { catchError } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products123';

  private products: Product[];

  constructor(private httpClient: HttpClient) {
    this.products = [
      {
        id: 1,
        name: 'Data Structures and Algorithms',
        description:
          'An ideal book for first course on data structures and algorithms, its text ensures a style and content relevant to present-day programming.',
        isAvailable: true,
        price: 285
      },
      {
        id: 2,
        name: 'Premsons 608 Four Bearing Fidget Spinner',
        description: 'Perfect toy for fidgeters.',
        isAvailable: false,
        price: 160
      },
      {
        id: 3,
        name: 'Bahubali',
        description:
          "Raised in a remote tribal village, Shivudu grows up a carefree young man who relentlessly pursues his heart's desire.",
        isAvailable: true,
        price: 268
      }
    ];
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        const appError = new AppError(error);
        return throwError(appError);
      })
    );
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.apiUrl + '/' + id);
  }

  addProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiUrl, product);
  }

  private generateId(): number {
    let id = 1;
    let lastItemIndex = this.products.length - 1;
    if (lastItemIndex > -1) {
      id = this.products[lastItemIndex].id + 1;
    }
    return id;
  }

  updateProduct(id: number, productInfo: Product) {
    // const product = this.getProduct(id);
    // if (product) {
    //   product.name = productInfo.name;
    //   product.description = productInfo.description;
    //   product.isAvailable = productInfo.isAvailable;
    //   product.price = productInfo.price;
    // }
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex(product => product.id === id);

    if (index >= 0) {
      this.products.splice(index, 1);
    }
  }
}
