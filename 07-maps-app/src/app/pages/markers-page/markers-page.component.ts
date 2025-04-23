import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import maplibregl from 'maplibre-gl';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-markers-page',
  imports: [],
  templateUrl: './markers-page.component.html',
  styles: ``
})
export class MarkersPageComponent implements AfterViewInit{
  divElement = viewChild<ElementRef>('map');
  map = signal<maplibregl.Map | null>(null);
  maptilerKey = environment.maptilerKey;
  
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

    const marker = new maplibregl.Marker({
      draggable: false,
      color: '#000',
    })
      .setLngLat([-3.6960161913658824, 40.38671882472341])
      .addTo(map);

    marker.on('dragend', (event) => {
      console.log(event);
    })

    this.mapListeners(map);
  }

  mapListeners(map: maplibregl.Map){
    
  }


}
