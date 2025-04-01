import { Component, inject, linkedSignal, resource, signal } from '@angular/core';import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { ListComponent } from "../../components/list/list.component";
import { of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import type { Region } from '../../interfaces/region.type';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'country-by-region-page',
  imports: [ListComponent],
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  countryService = inject(CountryService);

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = (this.activatedRoute.snapshot.queryParamMap.get('region') ?? '') as Region;

  selectedRegion = linkedSignal<Region | null>(() => this.queryParam ?? 'Europe');

  countryResource = rxResource({
    request: () => ({ region: this.selectedRegion() }),
    loader: ({ request }) => {
      if (!request.region) return of([]);

      this.router.navigate([
        '/country/by-region',
        {
          queryParams: {
            query: request.region,
          },
        },
      ]);

      return this.countryService.searchByRegion(request.region);
    },
  });
}
