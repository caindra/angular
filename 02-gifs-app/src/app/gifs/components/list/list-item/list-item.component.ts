import { Component, input } from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './list-item.component.html',
  styles: ``
})
export class ListItemComponent {
  imageUrl = input.required<string>();
}
