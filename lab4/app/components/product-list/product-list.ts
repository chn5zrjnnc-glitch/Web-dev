import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15',
      description: 'Powerful Apple smartphone',
      price: 500000,
      rating: 4.8,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz'
    },
    {
      id: 2,
      name: 'Samsung Galaxy',
      description: 'Premium Android device',
      price: 420000,
      rating: 4.6,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz'
    },
    {
      id: 3,
      name: 'Xiaomi 14',
      description: 'High-end budget Android phone',
      price: 250000,
      rating: 4.5,
      image: 'https://via.placeholder.com/200',
      link: 'https://kaspi.kz'
    }
  ];
}
