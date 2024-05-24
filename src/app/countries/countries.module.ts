import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountriPageComponent } from './pages/by-countri-page/by-countri-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/countri-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CountryTableComponent } from './components/country-table/country-table.component';



@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountriPageComponent,
    ByRegionPageComponent,
    CountryPageComponent,
    CountryTableComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    CountriesRoutingModule,
  ]
})
export class CountriesModule { }
