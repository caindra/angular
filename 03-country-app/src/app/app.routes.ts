import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'country',
    loadChildren: () => import('./countries/country.routes')//.then(m => m.countryRoutes)
  },
  {
    path: '**',
    redirectTo: ''
  },
];
