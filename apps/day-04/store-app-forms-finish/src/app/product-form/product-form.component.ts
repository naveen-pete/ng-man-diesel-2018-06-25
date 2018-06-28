import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  showMessage = false;
  @ViewChild('f') form: NgForm;
  product: Product = {
    id: 1,
    name: 'p1',
    description: 'p1 desc',
    price: 10,
    isAvailable: true
  };

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log('form:', this.form);
    console.log('form:', this.form.value);
    this.form.reset();
  }
}
