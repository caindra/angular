import { Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'acotar-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  styles: ``
})
export class CharacterListComponent {
  characters = input.required<Character[]>();
}
