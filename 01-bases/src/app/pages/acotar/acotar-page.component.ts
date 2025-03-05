import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-acotar-page',
  standalone: true,
  imports: [NgClass],
  templateUrl: './acotar-page.component.html',
  styles: ``
})
export class AcotarPageComponent {

  name = signal('Nesta');
  power = signal(90);

  public characters = signal<Character[]>([
    { id: 1, name: "Feyre Archeron", power: 95 },
    { id: 2, name: "Rhysand", power: 98 },
    { id: 3, name: "Morrigan", power: 92 },
    { id: 4, name: "Cassian", power: 94 },
    { id: 5, name: "Nesta Archeron", power: 90 },
    { id: 6, name: "Azriel", power: 93 },
    { id: 7, name: "Amren", power: 97 },
    { id: 8, name: "Tamlin", power: 85 },
    { id: 9, name: "Lucien", power: 88 },
    { id: 10, name: "Elain Archeron", power: 40 }
  ]);

  powerClasses = computed(() => ({
    'text-success': this.power() > 80
  }));

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
