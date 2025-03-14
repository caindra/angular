import { AfterViewChecked, AfterViewInit, Component, computed, ElementRef, inject, signal, viewChild } from '@angular/core';
import { ListComponent } from '../../components/list/list.component';
import { GifService } from '../../services/gifs.service';
import { ScrollStateService } from 'src/app/shared/services/scroll-state.service';

@Component({
  selector: 'app-trending-page',
  imports: [
    ListComponent
  ],
  templateUrl: './trending-page.component.html',
  styles: ``
})
export default class TrendingPageComponent implements AfterViewInit{
  gifService = inject(GifService);
  scrollStateService = inject(ScrollStateService);
  
  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv')
  
  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    
    if(!scrollDiv) return;
    
    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;
    
    const isAtBottom = scrollTop + clientHeight >= scrollHeight;
    this.scrollStateService.trendingScrollState.set(scrollTop);
    
    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
  }
  
  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }
}
