import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {Shipping} from "../../models/shipping";
import {Observable} from "rxjs";

@Component({
    selector: 'app-shipping',
    templateUrl: './shipping.component.html',
    styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
    shippingCosts: Observable<Shipping[]>;

    constructor(private cartService: CartService) {
    }

    ngOnInit(): void {
        this.shippingCosts = this.cartService.getShippingMethods();
    }

}
