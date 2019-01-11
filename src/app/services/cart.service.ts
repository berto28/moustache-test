import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any= [];
  cartSize: number = 0;
  constructor() { }


  addToCart(data): void{
    let flag = 1;
    this.cart.find(cart=> {
      if(cart.size == data.size){
        cart.count+=1;
        this.cartSize+=1;
        flag = 0;
      }
    });

    if(flag){
      this.cart.push(data);
      this.cartSize+=1;
    }
    console.log(this.cart);
    
  }
}
