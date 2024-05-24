import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/homepages/homepages.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactComponent } from './pages/contact-page/contact.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePagesComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactComponent,
    SearchBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],

  exports: [
    HomePagesComponent,
    AboutPageComponent,
    SidebarComponent,
    ContactComponent,
    SearchBoxComponent,
  ]
})
export class SharedModule { }
