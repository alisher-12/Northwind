import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductModel } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor(private http: HttpClient) { }

    public async getAllProducts(): Promise<ProductModel[]> {
        const products = await firstValueFrom(this.http.get<ProductModel[]>(environment.productsUrl));
        return products;
    }

    public async getOneProduct(id: number): Promise<ProductModel> {
        const product = await firstValueFrom(this.http.get<ProductModel>(environment.productsUrl + id));
        return product;
    }

}
