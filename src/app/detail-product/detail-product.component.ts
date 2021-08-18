import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private router: ActivatedRoute
    ) {}

  ngOnInit(){
    this.detail();
  }
  detail(){
    this.router.params.subscribe(params => {
      this.productService.detail(params.id).subscribe(data => {
        this.product = data;
      })
    })
  }
}
