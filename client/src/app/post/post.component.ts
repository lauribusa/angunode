import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/core';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.postMovies(this.body);
  }

  postMovies(hero){
    return this.http.post('http://localhost:9000/api/movies', body, any)
    .toPromise()
    .then(result => { 
      console.log(result);
    })
    .catch(err => console.log(err));
  }

}
