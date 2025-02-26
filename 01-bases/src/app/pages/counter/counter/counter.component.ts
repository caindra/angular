import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styles: ``
})
export class CounterComponent {
  public counter: number = 10;
  public counterSignal: WritableSignal<number> = signal(10);

  increaseBy(value: number){
    this.counter += value;
    this.counterSignal.update(current => current + value);
  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
