import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';

import { RouterModule, Router, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';



export const routes: Routes = [
  { path: ':id', component: MovieComponent }
  // { path: 'movies', component: MoviesComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MoviesComponent,
    MovieComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
