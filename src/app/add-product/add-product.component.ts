import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();

  constructor(
    private productService: ProductService,
    private router: Router,
    ) { }

  ngOnInit(){
  }

  add() {
    this.productService.add(this.product).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/product')
    })
  }
}
