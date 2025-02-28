import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter/counter.component';
import { HeroPageComponent } from './pages/hero/hero-page/hero-page.component';

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
    path: '**',
    redirectTo: ''
  },
];
