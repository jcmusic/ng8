import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = [];
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
    ) { 
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData){
    // process checkout data here
    console.warn('your order has been submitted', customerData);
    
    this.checkoutForm.reset;
    this.items = this.cartService.clearCart();
  }

  ngOnInit() {
  }

}