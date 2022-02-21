import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FooterComponent } from './footer/footer.component';
import { dishes } from './Dishes';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
 
  {
    path: "", component: HomeComponent
  },
  {
    path: "product", component: ProductListComponent
  },
  {
    path: 'footer', component: FooterComponent
  }, 
  {
    path: "Dishes/:dishesId", component: ProductDetailsComponent
  },
  {
    path: "cart", component: CartComponent
  },
  {
    path: "Aboutus", component: AboutusComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
