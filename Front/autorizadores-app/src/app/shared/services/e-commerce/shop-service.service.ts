import { Injectable } from '@angular/core';
import { productsType } from 'src/app/components/e-commerce/products/products.modal';

@Injectable({
  providedIn: 'root',
})
export class ShopServiceService {
  constructor() {}

  getData() {
    const productsData: productsType[] = [
      {
        id: 1,
        title: 'Flower Pot',
        children: [
          { img: './assets/images/products/1.jpg' },
          { img: './assets/images/products/1-1.jpg' },
          { img: './assets/images/products/1-2.jpg' },
          { img: './assets/images/products/1-3.jpg' },
        ],
        img: './assets/images/products/1.jpg',
        starText: 1,
        review: '48',
        lastValue: '$74',
        newValue: '$50',
        bageText: 'New',
        textStatus: 'primary',
      },
      {
        id: 2,
        title: 'Sofa Chair',
        children: [
          { img: './assets/images/products/2.jpg' },
          { img: './assets/images/products/2-1.jpg' },
          { img: './assets/images/products/2-2.jpg' },
          { img: './assets/images/products/2-3.jpg' },
        ],
        img: './assets/images/products/2.jpg',
        starText: 1,
        review: '18',
        lastValue: '$450',
        newValue: '$250',
        bageText: '',
        textStatus: '',
      },
      {
        id: 3,
        title: 'Watch',
        children: [
          { img: './assets/images/products/3.jpg' },
          { img: './assets/images/products/3-1.jpg' },
          { img: './assets/images/products/3-2.jpg' },
          { img: './assets/images/products/3-3.jpg' },
        ],
        img: './assets/images/products/3.jpg',
        starText: 1,
        review: '12',
        lastValue: '$860',
        newValue: '$350',
        bageText: '50%',
        textStatus: 'warning',
      },
      {
        id: 4,
        title: 'Table',
        children: [
          { img: './assets/images/products/4.jpg' },
          { img: './assets/images/products/4-1.jpg' },
          { img: './assets/images/products/4-2.jpg' },
          { img: './assets/images/products/4-3.jpg' },
        ],
        img: './assets/images/products/4.jpg',
        starText: 1,
        review: '02',
        lastValue: '$250',
        newValue: '$130',
        bageText: '',
        textStatus: '',
      },
      {
        id: 5,
        title: 'Cup',
        children: [
          { img: './assets/images/products/5.jpg' },
          { img: './assets/images/products/5-1.jpg' },
          { img: './assets/images/products/5-2.jpg' },
          { img: './assets/images/products/5-3.jpg' },
        ],
        img: './assets/images/products/5.jpg',
        starText: 1,
        review: '06',
        lastValue: '$125',
        newValue: '$55',
        bageText: '',
        textStatus: '',
      },
      {
        id: 6,
        title: 'Kurti',
        children: [
          { img: './assets/images/products/6.jpg' },
          { img: './assets/images/products/6-1.jpg' },
          { img: './assets/images/products/6-2.jpg' },
          { img: './assets/images/products/6-3.jpg' },
        ],
        img: './assets/images/products/6.jpg',
        starText: 1,
        review: '16',
        lastValue: '$450',
        newValue: '$250',
        bageText: '',
        textStatus: '',
      },
    ];
    return productsData;
  }
}
