import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class AcotarService {
  public characters = signal<Character[]>([
    { id: 1, name: "Feyre Archeron", power: 95 },
    { id: 2, name: "Rhysand", power: 98 },
  ]);

  addCharacter(newCharacter: Character): void {
    this.characters.update(list => [...list, newCharacter]);
  }

}
