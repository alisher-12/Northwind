import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    public product: ProductModel;

    constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

    // this.route --> do actions on current route.
    // this.route.snapshot --> current url.
    // this.route.snapshot.params --> route params collection.

    async ngOnInit() {
        try {
            const id = +this.route.snapshot.params["id"];
            this.product = await this.productsService.getOneProduct(id);
            console.log(this.product);
        }
        catch(err: any) {
            alert(err.message);
        }
    }

}
