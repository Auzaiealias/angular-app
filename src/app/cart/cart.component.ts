import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    age: '',
    phone: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(): void {
    //process checkout data here
    this.items = this.cartService.clearCart();

    //display form details
    console.warn('Your order has been submitted', this.checkoutForm.value);

    //reset checkoutform
    this.checkoutForm.reset();
  }
}
