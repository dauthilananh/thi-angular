import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  products: Product[];
  data: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
  // removeItem(id: number) {
  //   this.productService.removeProduct(id).subscribe(data => {
  //     this.products = this.products.filter(item => item.id != data.id);
  //   })
  // }
  remove(id: number) {
    this.productService.remove(id).subscribe(data => {
        const question =window.confirm('Bạn có chắc muốn xóa không?');
    if(question){
        this.products = this.products.filter(item => item.id != data.id);
    }
      
    });
  }
}
