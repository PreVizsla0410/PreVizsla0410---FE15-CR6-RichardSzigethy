
import { Component, OnInit } from '@angular/core';
import { dishes } from '../Dishes';
import { IDishes } from '../IDishes';
 
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
dishes : IDishes [] = dishes;
  constructor() { }

  ngOnInit(): void {
  }
}

