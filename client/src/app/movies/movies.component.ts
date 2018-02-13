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
  films: any = []
  ngOnInit() {
    this.getMovie();
    // this.http.get('http://localhost:9000/api/movies')
    // .toPromise()
    // .then(result =>{
    //   result.map(res => console.log(res.original_title));
    //   console.log(result);
    // })
    // .catch(err=> console.log(err));
  }

  getMovie() {
   return this.http.get('http://localhost:9000/api/movies').toPromise().then(result => {
    //result.map(res => console.log(res.original_title));
    this.films = result;
   }).catch(err => console.log(err));
 }

}
