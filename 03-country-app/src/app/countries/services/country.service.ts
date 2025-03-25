import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { map, Observable, catchError, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    const lowerCaseQuery = query.toLocaleLowerCase();
    const url = `${API_URL}/capital/${lowerCaseQuery}`;
    
    return this.http.get<RESTCountry[]>(url).pipe(
        map( resp => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        catchError(error => {
          console.log('Error fetching: ', error);
          return throwError(() => new Error(`No se pudo obtener ningún país: ${query}`));
        })
      );
  }

  searchByCountry(query: string): Observable<Country[]> {
    const lowerCaseQuery = query.toLocaleLowerCase();
    const url = `${API_URL}/name/${lowerCaseQuery}`;

    return this.http.get<RESTCountry[]>(url).pipe(
        map( resp => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        catchError(error => {
          console.log('Error fetching: ', error);
          return throwError(() => new Error(`No se pudo obtener ningún país: ${query}`));
        })
      );
  }

  searchByRegion(query: string): Observable<Country[]> {
    const lowerCaseQuery = query.toLocaleLowerCase();
    const url = `${API_URL}/region/${lowerCaseQuery}`;

    return this.http.get<RESTCountry[]>(url).pipe(
        map( resp => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        catchError(error => {
          console.log('Error fetching: ', error);
          return throwError(() => new Error(`No se pudo obtener ningún país con la región introducida: ${query}`));
        })
      );
  }

}
