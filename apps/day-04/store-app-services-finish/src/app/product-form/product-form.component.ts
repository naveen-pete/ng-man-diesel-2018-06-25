import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
    isAvailable: false
  };
  showMessage = false;

  constructor(
    private loggerService: LoggerService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {}

  onSubmit() {
    // this.productCreated.emit(this.product);
    this.productsService.addProduct(this.product);

    this.product = {
      id: 0,
      name: '',
      price: 0,
      description: '',
      isAvailable: false
    };

    this.showMessage = true;

    this.loggerService.log('(Form) New product created successfully.');

    setTimeout(() => {
      this.showMessage = false;
    }, 3000);
  }
}
