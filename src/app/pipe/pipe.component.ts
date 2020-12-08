import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  date_jour : Date;
  prix : number;


  constructor() { }

  ngOnInit(): void {
    this.date_jour = new Date();
    this.prix = 100;

  }

}
