import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './containers/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './components/movie/movie.component';
import { RatingComponent } from './components/rating/rating.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieComponent,
    RatingComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
