import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'acotar-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  styles: ``
})
export class CharacterAddComponent {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter(): void {
    if (!this.name() || this.power() < 0) return;

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    };

    //this.characters.update(list => [...list, newCharacter]);
    this.newCharacter.emit(newCharacter);
    this.resetFields();
  }

  resetFields(): void {
    this.name.set('');
    this.power.set(0);
  }


}
