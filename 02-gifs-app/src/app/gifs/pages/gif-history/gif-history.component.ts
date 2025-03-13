import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import { ListComponent } from "../../components/list/list.component";

@Component({
  selector: 'app-gif-history',
  imports: [ListComponent],
  templateUrl: './gif-history.component.html',
  styles: ``
})
export default class GifHistoryComponent {
  gifService = inject(GifService);

  query = toSignal(inject(ActivatedRoute).params.pipe(
    map(params => params['query'])
  ));

  gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()));
}

