import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductdetailsService } from 'src/app/shared/services/e-commerce/productdetails.service';
import { ShopServiceService } from 'src/app/shared/services/e-commerce/shop-service.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
active = 1;

public data:any
public posts:any

  constructor(private shopService: ShopServiceService, private productService: ProductdetailsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['id']){
      this.productService.emitProductId(location.pathname);
    }
    if (this.route.snapshot.params['id'] == undefined){
      this.data =[ {
        id: '2',
        photo: './assets/images/products/item1.png',
        name: 'Trending Half Hands Tshirt (Best Fabric Premium made T-shirt for Casual wear.)',
        offer_price: 299 ,
        price: 599,
      }]
    }
    else{
      this.data = this.shopService.getData().filter(post => post.id == this.route.snapshot.params['id']);
    }

    // console.log(this.data)

  }

}
