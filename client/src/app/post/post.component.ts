import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  body : any;
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.postMovies();
  }

  postMovies(){
    return this.http.post('http://localhost:9000/api/movies', this.body, httpOptions)
    .toPromise()
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
  }

}
