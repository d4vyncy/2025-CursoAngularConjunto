import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, catchError, throwError, delay, of, tap } from 'rxjs';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';
import { Region } from '../interfaces/region.types';

const API_URL = 'https://restcountries.com/v3.1'


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);
  private queryCacheCapital = new Map<string, Country[]>(); //mapa vacio
  private queryCacheCountry = new Map<string, Country[]>(); //mapa vacio
  private queryCacheRegion = new Map<Region, Country[]>(); //mapa vacio


  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLocaleLowerCase();

    if (this.queryCacheCapital.has(query)) {
      return of(this.queryCacheCapital.get(query)!);
    }

    console.log(`Llegando al buscador ${query}`);

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
      .pipe(
        map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
        tap(countries => this.queryCacheCapital.set(query, countries)),


        catchError(error => {
          console.log('Error fetching ', error);
          return throwError(() => new Error(`No se pudo obtener países con ese ${query}`));
        })
      );
  }

  searchByCountry(query: string): Observable<Country[]> {

    const url = `${API_URL}/name/${query}`;

    query = query.toLocaleLowerCase();

    if (this.queryCacheCountry.has(query)) {
      return of(this.queryCacheCountry.get(query)!);
    }

    console.log(`Llegando al buscador ${query}`);

    return this.http.get<RESTCountry[]>(url).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      tap(countries => this.queryCacheCountry.set(query, countries)),
      delay(2000),
      catchError(error => {
        console.log('Error fetching ', error);
        return throwError(() => new Error(`No se pudo obtener países con ese ${query}`));
      })
    );
  }

  searchCountryByAlphaCode(code: string) {
    const url = `${API_URL}/alpha/${code}`;

    return this.http.get<RESTCountry[]>(url).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      map(countries => countries.at(0)),

      catchError(error => {
        console.log('Error fetching ', error);

        return throwError(() => new Error(`No se pudo obtener el país con ese codigo ${code}`));
      })
    );
  }

  searchByRegion(region: Region): Observable<Country[]> {

    const url = `${API_URL}/region/${region}`;

    // query = query.toLocaleLowerCase();

    if (this.queryCacheCountry.has(region)) {
      return of(this.queryCacheCountry.get(region)!);
    }
    
    console.log(`Llegando al buscador por region ${region}`);

    return this.http.get<RESTCountry[]>(url).pipe(
      map((resp) => CountryMapper.mapRestCountryArrayToCountryArray(resp)),
      tap(countries => this.queryCacheRegion.set(region, countries)),      
      catchError(error => {
        console.log('Error fetching ', error);
        return throwError(() => new Error(`No se pudo obtener países con ese ${region}`));
      })
    );
  }
}
