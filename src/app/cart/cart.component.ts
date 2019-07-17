import { Component, OnInit } from '@angular/core';
import { hasParentInjector } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  bolt:boolean=true;
  gift:boolean=true;
  paypal:boolean=true;
  affirm:boolean=true;
 
  constructor() { }

  ngOnInit() {
    //This would be a good place to initialize DOM Variables and/or functions
  }

  boltCheckout(){
    this.bolt = !this.bolt;
  }

  giftCheckout(){
    this.gift = !this.gift;
  }

  paypalCheckout(){
    this.paypal = !this.paypal;
  }

  affirmCheckout(){
    this.affirm = !this.affirm;
  }

  termsFunc(){
    //COMPLETE THIS FUNCTION
    //This function is ran when a user selects the final sale checkbox
  }

  enableCheckout(){
    //COMPLETE THIS FUNCTION
    // This function enables the checkout buttons when a condition is met
  }

  disableCheckout(){
    //COMPLETE THIS FUNCTION
    // This disables the checkout buttons when a condition isn't met
  }

  alertUser(){
    //COMPLETE THIS FUNCTION
    // This function needs to alert the user when try to click one of the checkout buttons without agreeing to the terms.
  }
}