import { AfterViewInit, Component, effect, ElementRef, signal, viewChild } from '@angular/core';
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

    #controls{
      background-color: white;
      padding: 10px;
      border.radius: 5px;
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

  zoom = signal(4);

  async ngAfterViewInit() {
    if(!this.divElement()?.nativeElement) return;

    await new Promise(resolve => setTimeout(resolve, 80));

    const element = this.divElement()!.nativeElement;
    console.log(element);
    
  }

}
