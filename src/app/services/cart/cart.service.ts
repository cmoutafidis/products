import {Injectable} from '@angular/core';
import {Product} from "../../models/products";
import {HttpClient} from "@angular/common/http";
import {Shipping} from "../../models/shipping";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CartService {
    items: Product[] = [];

    constructor(private httpClient: HttpClient) {
    }

    getItems(): Product[] {
        return this.items;
    }

    addToCart(product: Product): void {
        this.items.push(product);
    }

    clearCart(): void {
        this.items = [];
    }

    getShippingMethods(): Observable<Shipping[]> {
        return this.httpClient.get<Shipping[]>('/assets/shipping.json');
    }
}
