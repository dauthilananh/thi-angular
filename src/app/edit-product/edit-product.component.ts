import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router,

  ) { }

  ngOnInit(){
    this.getInfo();
  }
  getInfo(){
    this.activatedRoute.params.subscribe(params => {
      this.productService.getInfo(params.id).subscribe(data => {
        this.product = data;
      });
    })
  }
  update() {
    this.productService.update(this.product).subscribe(data => {
      this.router.navigateByUrl('/product');
    })
  }
}
