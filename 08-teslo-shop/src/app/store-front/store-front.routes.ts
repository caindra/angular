import { Routes } from '@angular/router';

export const storeFrontRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layouts/store-front-layout/store-front-layout.component').then(
        (m) => m.StoreFrontLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home-page/home-page.component').then(
            (m) => m.HomePageComponent
          ),
      },
      {
        path: 'gender/:gender',
        loadComponent: () =>
          import('./pages/gender-page/gender-page.component').then(
            (m) => m.GenderPageComponent
          ),
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import('./pages/product-page/product-page.component').then(
            (m) => m.ProductPageComponent
          ),
      },
      {
        path: '**',
        loadComponent: () =>
          import('./pages/not-found-page/not-found-page.component').then(
            (m) => m.NotFoundPageComponent
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export default storeFrontRoutes;
