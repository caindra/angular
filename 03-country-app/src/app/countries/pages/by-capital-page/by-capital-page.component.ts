import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { ListComponent } from "../../components/list/list.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'country-by-capital-page',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  countryService = inject(CountryService);

  //Forma (experimental) de hacer las cosas con Angular 19
  query = signal('');

  countryResource = resource({
    request: () => ({ query: this.query() }),
    loader: async ({ request }) => {
      if (!request.query) return [];

      return await firstValueFrom(
        this.countryService.searchByCapital(request.query)
      );
    }
  });

  //=======================================================

  // Forma anterior de hacer las cosas:

  // isLoading = signal(false);
  // isError = signal<string|null>(null);
  // countries = signal<Country[]>([]);

  // onSearch(query: string){
  //   if (this.isLoading()) return;

    // this.isLoading.set(true);
    // this.isError.set(null);

    // this.countryService.searchByCapital(query).subscribe({
    //   //los puntos con la flecha se usan para no perder la referencia
    //   next: (countries) => {
    //     this.isLoading.set(false);
    //     this.countries.set(countries);
    //   },
    //   error:(err) => {
    //     this.isLoading.set(false);
    //     this.countries.set([]);
    //     this.isError.set(err);
    //   },
    // });
  // }
}
