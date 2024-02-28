import { Routes } from "@angular/router";
import { ProductListComponent } from "./product-List/product-list/product-list.component";
import { ProductDetailComponent } from "./product-details/product-detail/product-detail.component";

export const product_routes: Routes = [
    { path: "", component: ProductListComponent },
    { path: ":id", component: ProductDetailComponent },
    {path:":id/edit", component:ProductDetailComponent}
]