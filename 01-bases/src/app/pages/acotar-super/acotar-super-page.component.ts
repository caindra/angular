import { AcotarService } from './../../services/acotar.service';
import { NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
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
  /*
  // This is the Angular way to inject a service, this is how it was used to be done before
  constructor(
    public AcotarService: AcotarService
  ) {}
    */
  public AcotarService = inject(AcotarService);
}
