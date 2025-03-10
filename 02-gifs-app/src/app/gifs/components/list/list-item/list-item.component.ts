import { Component, input } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gif.interface';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './list-item.component.html',
  styles: ``
})
export class ListItemComponent {
  imageUrl = input.required<string>();
}
