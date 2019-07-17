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
  checkboxClicked:boolean=false;
 
  constructor() { }

  ngOnInit() {
  }

  boltCheckout(){
    if (this.checkboxClicked == true) {
      this.bolt = !this.bolt;
    }
  }

  giftCheckout(){
    if (this.checkboxClicked == true) {
      this.gift = !this.gift;
    }
  }

  paypalCheckout(){
    if (this.checkboxClicked == true) {
      this.paypal = !this.paypal;
    }
  }

  affirmCheckout(){
    if (this.checkboxClicked == true) {
      this.affirm = !this.affirm;
    }
  }

  termsFunc(){
    this.checkboxClicked = !this.checkboxClicked;
  }

  enableCheckout(){
    // This method was not needed. 
  }

  disableCheckout(){
    // This method was not needed. 
  }

  alertUser(){
    if(this.checkboxClicked == false) {
      alert("Please agree to the final sale terms!");
    }
  }

}