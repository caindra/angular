import { Routes } from '@angular/router';
import { AdminDashboardLayoutComponent } from './layouts/admin-dashboard-layout/admin-dashboard-layout.component';
import { ProductsAdminPageComponent } from './components/products-admin-page/products-admin-page.component';
import { ProductAdminPageComponent } from './components/product-admin-page/product-admin-page.component';

export const adminDashboardRoutes: Routes = [
  {
    path: '',
    component: AdminDashboardLayoutComponent,
    children: [
      {
        path: 'products',
        component: ProductsAdminPageComponent,
      },
      {
        path: 'product/:id',
        component: ProductAdminPageComponent,
      },
      {
        path: '**',
        redirectTo: 'products'
      },
    ],
  },
];

export default adminDashboardRoutes;
