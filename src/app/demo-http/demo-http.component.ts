import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-http',
  templateUrl: './demo-http.component.html',
  styleUrls: ['./demo-http.component.css']
})
export class DemoHttpComponent implements OnInit {

  posts : any;

  constructor(private http : HttpClient) { }

  add(){
    let newPost = {
      userId : 1,
      id : 1,
      title : "test article",
      body : "contenu de l'article"
    };
    this.http.post('https://jsonplaceholder.typicode.com/posts', newPost).subscribe(
      resultat =>{
        console.log(resultat);
      }
    )
  }


  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      resultat =>{
        this.posts = resultat;
        ///console.log(this.posts);
      }
    )

  }

}
