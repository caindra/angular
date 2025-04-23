import { Component, input, signal } from '@angular/core';
import { MapComponent } from '@maplibre/ngx-maplibre-gl';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-mapa',
  imports: [MapComponent],
  templateUrl: './mapa.component.html',
  styles: `
    mgl-map {
      height: 100vh;
      width: 100%;
      display: block;
    }
  `,
})
export class MapaComponent {
  maptilerKey = environment.maptilerKey;
  url = signal(`https://api.maptiler.com/maps/streets/style.json?key=${this.maptilerKey}`);
  zoom = input.required<number>();
}
