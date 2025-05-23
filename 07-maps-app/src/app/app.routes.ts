import { Routes } from '@angular/router';
import { FullcreenMapPageComponent } from './pages/fullcreen-map-page/fullcreen-map-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { HousesPageComponent } from './pages/houses-page/houses-page.component';

export const routes: Routes = [
  {
    path: 'fullscreen',
    component: FullcreenMapPageComponent,
    title: 'FullScreen Map',
  },
  {
    path: 'markers',
    component: MarkersPageComponent,
    title: 'Markers',
  },
  {
    path: 'houses',
    component: HousesPageComponent,
    title: 'Houses - Available Propierties',
  },
  {
    path: '**',
    redirectTo: 'fullscreen',
  },
];
