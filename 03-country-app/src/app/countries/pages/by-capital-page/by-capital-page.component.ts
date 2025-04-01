import { Component, inject, linkedSignal, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { ListComponent } from "../../components/list/list.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'country-by-capital-page',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);
  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';
  router = inject(Router);

  //Forma (experimental) de hacer las cosas con Angular 19
  query = linkedSignal(() => this.queryParam);

  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);

      this.router.navigate(['/country/by-capital', {
        queryParams: {
          query: request.query,
        }
      }]);

      return this.countryService.searchByCapital(request.query);
    },
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
  //   los puntos con la flecha se usan para no perder la referencia
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
