import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

const routes: Routes = [
  {path: '', redirectTo: 'product', pathMatch: 'full'},
  {path: 'product', component: ListProductComponent},
  {path: 'product/add', component: AddProductComponent},
  {path: 'product/:id/edit', component: EditProductComponent},
  {path: 'product/:id', component: DetailProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
