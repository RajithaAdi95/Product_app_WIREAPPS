import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit {

  products: any = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts()    
  }

}
