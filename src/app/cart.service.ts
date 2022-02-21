import { dishes } from './Dishes';
import { Injectable } from '@angular/core';
import { IDishes } from './IDishes';

@Injectable({
  providedIn: 'root'
})
export class CartService {
dishes: IDishes[] = [];
  constructor() { }

  addToCart(dishes:IDishes){
    this.dishes.push(dishes);
  }
  getDishes(){
     
    return this.dishes;
  }
  sum : any = 0;
  total(){
   
    for(let val of this.dishes)
        this.sum = this.sum + val.price;
        return this.sum;
    
  }
  
  clearCart(){
    this.dishes = [];
    return this.dishes;
  }
}
