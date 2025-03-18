import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenuComponent } from "../../components/top-menu/top-menu.component";
import { SearchInputComponent } from "../../components/search-input/search-input.component";

@Component({
  selector: 'app-country-layout',
  imports: [
    RouterOutlet,
    TopMenuComponent,
    SearchInputComponent
],
  templateUrl: './country-layout.component.html',
  styles: ``
})
export class CountryLayoutComponent {

}
