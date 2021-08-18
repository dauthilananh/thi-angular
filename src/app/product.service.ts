import { Injectable } from '@angular/core';
import { Product } from './product';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
    API: string = 'https://60f780d49cdca00017454e7e.mockapi.io/api/products';
    
    constructor(private http: HttpClient) {}

    //list
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.API);
    }
    //chi tiet
    detail(id: number): Observable<Product>{
        return this.http.get<Product>(`${this.API}/${id}`);
    }
    //thêm
    add(item: Product): Observable<Product> {
        return this.http.post<Product>(this.API, item);
    }
    //sửa
    getInfo(id: number): Observable<Product> {
        return this.http.get<Product>(`${this.API}/${id}`);
    }
    update(item: Product): Observable<Product> {
        return this.http.put<Product>(`${this.API}/${item.id}`, item)
    }
    //xoa
    remove(id: number): Observable<Product> {
        return this.http.delete<Product>(`${this.API}/${id}`);
    }
}