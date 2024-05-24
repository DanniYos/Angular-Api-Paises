import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'shared-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor( private countriesServices: CountriesService ){}

  serchByCapital(value: string): void{
    this.countriesServices.searchCapital(value).
      subscribe( countries => {
        this.countries = countries;
      });
  }



}
