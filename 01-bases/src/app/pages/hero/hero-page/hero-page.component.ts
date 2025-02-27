import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [],
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent {
  public name: WritableSignal<string> = signal('IronMan');
  public age: WritableSignal<number> = signal(45);

  constructor(){}

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

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
