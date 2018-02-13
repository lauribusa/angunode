import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  count: any;
  
  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.getMovieCount();
  }

  getMovieCount(){
    return this.http.get('http://localhost:9000/api/movies/count')
    .toPromise()
    .then(res => {
      this.count = res; 
      console.log(res)})
    .catch(err => console.log(err));
  }
}
