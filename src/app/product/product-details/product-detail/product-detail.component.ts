import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ProductListComponent } from '../../product-List/product-list/product-list.component';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id')); // reading id route parameter
  }
}
