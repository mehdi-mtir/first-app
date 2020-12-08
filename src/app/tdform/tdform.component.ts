import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent implements OnInit {

  constructor() { }

  validerForm(f : NgForm){
    console.log(f);
  }

  ngOnInit(): void {
  }

}
