import { AfterViewInit, Component, effect, ElementRef, signal, viewChild } from '@angular/core';
import maplibregl from 'maplibre-gl';
import { environment } from '../../../environments/environment';
import { DecimalPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-fullcreen-map-page',
  imports: [
    DecimalPipe,
    JsonPipe,
  ],
  templateUrl: './fullcreen-map-page.component.html',
  styles: `
    div {
      width: 100vw;
      height: calc(100vh - 64px);
    }

    #controls{
      background-color: white;
      padding: 10px;
      border-radius: 5px;
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      border: 1px solid #e2e8f0;
      width: 250px;
    }
  `
})
export class FullcreenMapPageComponent implements AfterViewInit{
  divElement = viewChild<ElementRef>('map');
  map = signal<maplibregl.Map | null>(null);
  maptilerKey = environment.maptilerKey;

  zoom = signal(5);
  coordinates = signal({
    lng: -4,
    lat: 40,
  });

  zoomEffect = effect(() => {
    if (!this.map()) return;

    this.map()?.setZoom(this.zoom());
    // this.map()?.zoomTo(this.zoom());
  });

  async ngAfterViewInit() {
    if (!this.divElement()?.nativeElement) return;

    await new Promise((resolve) => setTimeout(resolve, 80));

    const element = this.divElement()!.nativeElement;
    const { lat, lng } = this.coordinates();

    const map = new maplibregl.Map({
      container: element, // container ID
      style: `https://api.maptiler.com/maps/streets/style.json?key=${this.maptilerKey}`, // style URL
      center: [lng, lat], // starting position [lng, lat]
      zoom: this.zoom(), // starting zoom
    });

    this.mapListeners(map);
  }

  mapListeners(map: maplibregl.Map) {
    map.on('zoomend', (event) => {
      const newZoom = event.target.getZoom();
      this.zoom.set(newZoom);
    });

    map.on('moveend', () => {
      const center = map.getCenter();
      this.coordinates.set(center);
    });

  }
}
