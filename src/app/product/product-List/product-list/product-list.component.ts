import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: any = [
    { id: 1, name: "product 1", price: "100.00" },
    { id: 2, name: "product 2", price: "200.00" },
    { id: 3, name: "product 3", price: "300.00" }
  ]
}
