import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(product){
    this.cartService.addToCart(product);
  }
}