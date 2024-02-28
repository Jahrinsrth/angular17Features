import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));   // reading id route parameter
    
  }

}
