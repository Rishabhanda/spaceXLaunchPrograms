import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { SpacexButtonComponent } from './shared/components/spacex-button/spacex-button.component';
import { FiltersComponent } from './filters/filters.component';
import { SpacexCardsComponent } from './shared/components/spacex-cards/spacex-cards.component';
import { SpacexCardComponent } from './shared/components/spacex-cards/spacex-card/spacex-card.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SpacexButtonComponent,
    FiltersComponent,
    SpacexCardsComponent,
    SpacexCardComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
