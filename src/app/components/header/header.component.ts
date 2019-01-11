import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart: boolean = false;
  iconSrc = '../../../assets/icon_cart.png';
  
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  showCart(): void{

    if(this.cart == false){
      this.iconSrc = '../../../assets/icon_cart_active.png'
      this.cart = true;
    }
    else{
      this.iconSrc = '../../../assets/icon_cart.png';
      this.cart = false;
    }
  }
}
