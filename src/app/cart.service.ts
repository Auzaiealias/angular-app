import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

  //add a product to an array of items
  addToCart(product: Product) {
    this.items.push(product);
  }

  //collect the items users add to the cart and returns each item with its quantity
  getItems() {
    return this.items;
  }

  //clear the cart
  clearCart() {
    this.items = [];
    return this.items;
  }

  //get HttpClient from shipping.json
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
