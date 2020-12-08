import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-demo-service',
  templateUrl: './demo-service.component.html',
  styleUrls: ['./demo-service.component.css']
  //providers : [DemoService]
})
export class DemoServiceComponent implements OnInit {
  message1 : string;
  constructor(private s : DemoService) {

  }

  message(){
    this.s.showMessage(this.message1);
    this.s.somme(5, 6);
  }

  ngOnInit(): void {
    this.message1 = "valeur par defaur";
  }

}
