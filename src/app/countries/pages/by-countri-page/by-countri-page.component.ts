import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-countri-page',
  templateUrl: './by-countri-page.component.html',
  styles: ``
})
export class ByCountriPageComponent {

  public countries : Country[] = [];

  constructor( private countriesService :  CountriesService ){}


  searchCountry(value: string){
    this.countriesService.serchCountry(value)
      .subscribe(country => { this.countries = country });
  }

}
