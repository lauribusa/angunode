import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  { path: 'movie/:id', component: MovieComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'post', component: PostComponent}
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
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
