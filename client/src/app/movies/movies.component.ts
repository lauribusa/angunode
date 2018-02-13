import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any = [];
  visualMovies: any;
  count: String;


  constructor(public http: HttpClient) {
    this.movies = [];
    this.visualMovies = [];

  }


  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    return this.http.get('http://localhost:9000/api/movies')
      .toPromise()
      .then(result => { this.movies = result; this.generateVisualMovies(); })
      .catch(err => console.log(err));
  }

  generateVisualMovies() {
    let tmpArray = [];
    this.movies.map((element, i) => {
      if (i % 4 === 0) {
        if (tmpArray.length > 0) {
          this.visualMovies.push(tmpArray);
        }
        tmpArray = [];
        tmpArray.push(element);
      } else {
        tmpArray.push(element);
        if (i === this.movies.length - 1 ) {
          this.visualMovies.push(tmpArray);
        }
      }

    });
    console.log(this.visualMovies);
  }

}
