import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  price = '75.00';
  selectedSize: string;
  btnArray: any = [
    {
      active: 'false',
      size: 'S',
      imgSrc: '../../../assets/model.webp',
      name: 'Classic Tee'
    },
    {
      active: 'false',
      size: 'M',
      imgSrc: '../../../assets/model.webp',
      name: 'Classic Tee'
    },
    {
      active: 'false',
      size: 'L',
      imgSrc: '../../../assets/model.webp',
      name: 'Classic Tee'
    }
  ];
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onSelectSize(index): void{
    this.btnArray.forEach(btn=>{
      btn.active = 'false';
    });
    this.selectedSize = this.btnArray[index].size;
    this.btnArray[index].active = 'active';
  }

  addToCart(){
    this.btnArray.find(btn=> {
      if(btn.active == 'active'){
        this.cartService.addToCart({
          size: btn.size,
          price: this.price,
          count: 1,
          imgSrc: btn.imgSrc,
          name: btn.name
        });
      }
    });
    
  }

}
