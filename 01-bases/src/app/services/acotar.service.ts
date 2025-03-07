import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class AcotarService {
  public characters = signal<Character[]>([
    { id: 1, name: "Feyre Archeron", power: 95 },
    { id: 2, name: "Rhysand", power: 98 },
  ]);

  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  })

  addCharacter(newCharacter: Character): void {
    this.characters.update(list => [...list, newCharacter]);
  }

}
