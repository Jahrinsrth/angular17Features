import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ContactsComponent } from './contacts/contacts/contacts.component';
import { AboutComponent } from './about/about/about.component';
import { PageNotFoundComponent } from './pageNotFound/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactsComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.routes').then((x) => x.product_routes),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
