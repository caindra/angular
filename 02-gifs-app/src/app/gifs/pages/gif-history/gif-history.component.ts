import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-gif-history',
  imports: [],
  templateUrl: './gif-history.component.html',
  styles: ``
})
export default class GifHistoryComponent {
  // query = inject(ActivatedRoute).params.subscribe(params => {
  //   console.log({params});
  // });

  query = toSignal(inject(ActivatedRoute).params.pipe(
    map(params => params['query'])
  ));
}

