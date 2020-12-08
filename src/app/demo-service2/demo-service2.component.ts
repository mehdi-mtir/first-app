import { Component, DoCheck, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-demo-service2',
  templateUrl: './demo-service2.component.html',
  styleUrls: ['./demo-service2.component.css']
  //providers : [DemoService]
})
export class DemoService2Component implements OnInit, DoCheck{
  messageRecu : string;

  constructor(private s : DemoService) { }

  afficherSomme(){
    console.log(this.s.z);
  }

  ngDoCheck(){
    this.messageRecu = this.s.message;
  }

  ngOnInit(): void {
    this.messageRecu = this.s.message;
  }

}
