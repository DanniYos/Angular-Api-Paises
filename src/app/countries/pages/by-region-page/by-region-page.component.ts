import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries : Country[] = [];

  constructor( private countriesService : CountriesService ){}

  searchRegion( value : string ){
    this.countriesService.searchRegion(value)
      .subscribe( country => { this.countries = country });
  }

}
