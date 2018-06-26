import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent {
  productName = 'iPhone';

  onSave(e) {
    console.log('Form submitted');
    console.log('click event object:', e);
  }

  onInput(e) {
    console.log(e.target.value);
  }
}
