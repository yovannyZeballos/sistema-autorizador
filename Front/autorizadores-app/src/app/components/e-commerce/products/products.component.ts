import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopServiceService } from 'src/app/shared/services/e-commerce/shop-service.service';
import { productsType } from './products.modal';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  page = 1;
  productsList: productsType[];
  constructor(private router:Router,public ShopService: ShopServiceService,) {
    this.productsList = this.ShopService.getData();
   }

  ngOnInit(): void {
  }

  onSelect(ele:any){
    this.router.navigate(['/ecommerce/products-details/', ele.id]);
  }



}
