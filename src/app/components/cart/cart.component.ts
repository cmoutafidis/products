import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import {Product} from '../../models/products';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    items: Product[];
    checkoutForm: FormGroup;

    constructor(private cartService: CartService, private formBuilder: FormBuilder) {
        this.checkoutForm = this.formBuilder.group({
            name: '',
            address: ''
        });
    }

    ngOnInit(): void {
        this.items = this.cartService.getItems();
    }

    onSubmit(): void {
        console.warn('Your order has been submitted!', this.checkoutForm.value);
        this.cartService.clearCart();
        this.checkoutForm.reset();
    }

}
