import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from './logger.service';

@Injectable()
export class ProductsService {
  products: Product[] = [
    {
      id: 1,
      name: '4S Engine',
      description: 'Used in ships & gen sets',
      price: 250000,
      isAvailable: true
    },
    {
      id: 2,
      name: '2S Engine',
      description: 'Used in cargo ships',
      price: 350000,
      isAvailable: false
    },
    {
      id: 3,
      name: 'Power Plant',
      description: 'Create models of power plants',
      price: 1000000,
      isAvailable: true
    }
  ];

  constructor(private loggerService: LoggerService) {}

  getAll(): Product[] {
    this.loggerService.log(
      'ProductsService.getAll(): products array:' +
        JSON.stringify(this.products)
    );
    return this.products;
  }

  addProduct(product: Product) {
    this.products.unshift(product);
  }
}
