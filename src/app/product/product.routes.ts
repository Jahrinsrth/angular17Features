import { Routes } from '@angular/router';
import { ProductListComponent } from './product-List/product-list/product-list.component';
import { ProductDetailComponent } from './product-details/product-detail/product-detail.component';
import { ProductDetailOverviewComponent } from './product-details/product-detail/product-detail-overview/product-detail-overview.component';
import { ProductDetailContactComponent } from './product-details/product-detail/product-detail-contact/product-detail-contact.component';

export const product_routes: Routes = [
  { path: '', component: ProductListComponent },
  {
    path: ':id',
    component: ProductDetailComponent,
    children: [
    //   { path: '', redirectTo: 'overview', pathMatch: 'full' }, directly redirect to path => id/overview
      { path: 'overview', component: ProductDetailOverviewComponent },
      { path: 'contactabt', component: ProductDetailContactComponent },
    ],
  },
  { path: ':id/edit', component: ProductDetailComponent },
];
