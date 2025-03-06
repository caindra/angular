import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/acotar/character-list/character-list.component';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'acotar-super',
  templateUrl: './acotar-super-page.component.html',
  imports: [
    CharacterListComponent
  ],
  styles: ``
})
export class AcotarSuperPageComponent {

  name = signal('');
  power = signal(0);

  public characters = signal<Character[]>([
    { id: 1, name: "Feyre Archeron", power: 95 },
    { id: 2, name: "Rhysand", power: 98 },
  ]);

  addCharacter(): void {
    if (!this.name() || this.power() < 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    };

    this.characters.update(list => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }
}
