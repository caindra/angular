import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styles: ``
})
export class SearchInputComponent {
  placeholder = input('Buscar');
  value = output<string>();
  debounceTime = input(300);
  initalValue = input<string>();

  inputValue = linkedSignal<string>(() => this.initalValue() ?? '');

  debounceEffect = effect((onCleanup) => {
    const value = this.inputValue();

    const timeOut = setTimeout(() => {this.value.emit(value)}, this.debounceTime());

    onCleanup(() => {
      clearTimeout(timeOut);
    });
  });
}
