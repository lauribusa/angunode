import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  constructor(public http: HttpClient) {

  }
  films: any = [];

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
   return this.http.get('http://localhost:9000/api/movies')
   .toPromise()
   .then(result => {this.films = result;console.log(result);})
   .catch(err => console.log(err));
 }

}
