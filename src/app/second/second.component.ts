import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
 @Input() message;
 @Output() messageUpdated = new EventEmitter<string>();

  constructor() { }

  PasserMessageAuParent(){
    this.messageUpdated.emit(this.message);
  }

  ngOnInit(): void {
    //this.message = "Message du second component";
  }

}
