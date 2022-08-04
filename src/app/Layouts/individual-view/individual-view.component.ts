import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/product';
import { Location } from '@angular/common';

@Component({
  selector: 'app-individual-view',
  templateUrl: './individual-view.component.html',
  styleUrls: ['./individual-view.component.scss']
})
export class IndividualViewComponent implements OnInit {

  product!: Product;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.product = this.productService.getProduct(id);    
  }

  goBack(): void {
    this.location.back();
  }

}
