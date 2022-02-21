
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { CartService } from '../cart.service';
import { dishes } from '../Dishes';
import { IDishes } from '../IDishes';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  dishes: IDishes = {} as IDishes;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }
  

    successInfo: string = "Your dish is ordered, please go further to the payments";
    addToCart()
      {
        this.cartService.addToCart(this.dishes);
        (document.getElementById("success-Info")as HTMLElement).innerHTML = this.successInfo;
        (document.getElementById("success-Info")as HTMLElement).classList.add("alert-success");
      
      }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['dishesId'];
      this.dishes = dishes[this.id];

    })
  }}