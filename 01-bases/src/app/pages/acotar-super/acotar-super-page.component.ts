import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/acotar/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/acotar/character-add/character-add.component';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'acotar-super',
  templateUrl: './acotar-super-page.component.html',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
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

  addCharacter(newCharacter: Character): void {
    this.characters.update(list => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }
}
