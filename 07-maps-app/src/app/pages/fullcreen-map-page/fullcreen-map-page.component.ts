import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
import { MapaComponent } from '../../components/mapa/mapa.component';

@Component({
  selector: 'app-fullcreen-map-page',
  imports: [
    MapaComponent,
  ],
  templateUrl: './fullcreen-map-page.component.html',
  styles: `
    div {
      width: 100vw;
      height: calc(100vh - 64px);
    }
  `
})
export class FullcreenMapPageComponent implements AfterViewInit{
  divElement = viewChild<ElementRef>('map');

  async ngAfterViewInit() {
    if(!this.divElement()?.nativeElement) return;

    await new Promise(resolve => setTimeout(resolve, 80));

    const element = this.divElement()!.nativeElement;
    console.log(element);
    
  }
}
