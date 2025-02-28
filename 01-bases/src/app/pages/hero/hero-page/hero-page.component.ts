import { UpperCasePipe } from '@angular/common';
import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [
    UpperCasePipe
  ],
  templateUrl: './hero-page.component.html',
  styles: `
  dd{
    font-weight: bold;
    font-size: 1.2em;
  }`
})
export class HeroPageComponent {
  public name: WritableSignal<string> = signal('IronMan');
  public age: WritableSignal<number> = signal(45);

  public heroDescription: Signal<string> = computed(() => `${ this.name() } - ${ this.age() }`);

  public capitalazedName: Signal<string> = computed(() => this.name().toUpperCase());
  constructor(){}

  changeHero(): void {
    this.name.update(current => current = 'Spiderman');
    this.age.update(current => current = 22);
  }

  resetForm(): void {
    this.name.update(current => current = 'IronMan');
    this.age.update(current => current = 45);
  }

  changeAge(): void {
    this.age.update(current => current = 60);
  }
}
