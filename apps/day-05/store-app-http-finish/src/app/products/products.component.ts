import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { AppError } from '../common/app-error';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private service: ProductsService) {}

  ngOnInit() {
    this.service.getProducts().subscribe(
      products => {
        this.products = products;
        console.log('Success: Get products successful.', products);
      },
      (error: AppError) => {
        console.log('Error: Get products failed.', error);
      }
    );
  }

  onDelete(productId) {
    if (confirm('Are you sure?')) {
      this.service.deleteProduct(productId);
    }
  }
}
