import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter/counter.component';
import { HeroPageComponent } from './pages/hero/hero-page/hero-page.component';
import { AcotarPageComponent } from './pages/acotar/acotar-page/acotar-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'acotar',
    component: AcotarPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];
