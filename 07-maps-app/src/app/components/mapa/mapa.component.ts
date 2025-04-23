import { Component, input } from '@angular/core';
import { MapComponent } from '@maplibre/ngx-maplibre-gl';

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
  zoom = input.required<number>();
}
