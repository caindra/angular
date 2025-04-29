import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import maplibregl, { LngLatLike } from 'maplibre-gl';
import { environment } from '../../../environments/environment';
import { v4 as UUIDv4 } from 'uuid';
import { JsonPipe } from '@angular/common';

interface CustomMarker {
  id: string;
  maplibreMarker: maplibregl.Marker;
}

@Component({
  selector: 'app-markers-page',
  imports: [
    JsonPipe,
  ],
  templateUrl: './markers-page.component.html',
  styles: ``,
})
export class MarkersPageComponent implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');
  map = signal<maplibregl.Map | null>(null);
  maptilerKey = environment.maptilerKey;
  markers = signal<CustomMarker[]>([]);

  async ngAfterViewInit(): Promise<void> {
    if (!this.divElement()?.nativeElement) return;

    await new Promise((resolve) => setTimeout(resolve, 80));

    const element = this.divElement()!.nativeElement;

    const map = new maplibregl.Map({
      container: element, // container ID
      style: `https://api.maptiler.com/maps/streets/style.json?key=${this.maptilerKey}`, // style URL
      center: [-3.6960161913658824, 40.38671882472341], // starting position [lng, lat]
      zoom: 11, // starting zoom
    });

    // const marker = new maplibregl.Marker({
    //   draggable: false,
    //   color: '#000',
    // })
    //   .setLngLat([-3.6960161913658824, 40.38671882472341])
    //   .addTo(map);

    // marker.on('dragend', (event) => {
    //   console.log(event);
    // })

    this.mapListeners(map);
  }

  mapListeners(map: maplibregl.Map) {
    map.on('click', (event) => {
      this.mapClick(event);
    });

    this.map.set(map);
  }

  mapClick(event: maplibregl.MapMouseEvent) {
    if (!this.map()) return;

    const map = this.map()!;
    const coords = event.lngLat;
    const color = '#xxxxxx'.replace(/x/y, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );

    const maplibreMarker = new maplibregl.Marker({
      color: color,
    })
      .setLngLat(coords)
      .addTo(map);

    const newMarker: CustomMarker = {
      id: UUIDv4(),
      maplibreMarker: maplibreMarker,
    };

    // this.markers.set([maplibreMarker, ...this.markers()]);
    this.markers.update((markers) => [newMarker, ...markers]);
  }

  flyToMarker(lngLat: LngLatLike) {
    if (!this.map()) return;

    this.map()?.flyTo({
      center: lngLat,
    });
  }

  deleteMarker(marker: CustomMarker) {
    if (!this.map()) return;
    const map = this.map()!;

    marker.maplibreMarker.remove();

    this.markers.set(this.markers().filter((m) => m.id !== marker.id));
    // this.markers.update(this.markers().filter((m) => m.id !== marker.id));
  }
}

