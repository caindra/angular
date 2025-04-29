import { AfterViewInit, Component, ElementRef, input, signal, viewChild } from '@angular/core';
import maplibregl from 'maplibre-gl';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-mini-map',
  imports: [],
  templateUrl: './mini-map.component.html',
  styles: `
    div {
      width: 100%;
      height: 260px;
    }
  `
})
export class MiniMapComponent implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');
  map = signal<maplibregl.Map | null>(null);
  maptilerKey = environment.maptilerKey;
  lngLat = input.required<{lng: number, lat: number}>();
  zoom = input<number>(11);

  async ngAfterViewInit(): Promise<void> {
    if (!this.divElement()?.nativeElement) return;

    await new Promise((resolve) => setTimeout(resolve, 80));

    const element = this.divElement()!.nativeElement;

    const map = new maplibregl.Map({
      container: element, // container ID
      style: `https://api.maptiler.com/maps/streets/style.json?key=${this.maptilerKey}`, // style URL
      center: this.lngLat(), // starting position [lng, lat]
      zoom: 11, // starting zoom
    });

    new maplibregl.Marker()
    .setLngLat([this.lngLat().lng, this.lngLat().lat])
    .addTo(map);

    this.map.set(map);

  }


}
