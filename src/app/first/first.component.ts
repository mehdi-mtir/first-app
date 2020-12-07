import { Component } from '@angular/core';


@Component({
  selector : 'app-first',
  templateUrl : './first.component.html'
})
export class FirstComponent{
  message = "Message du parent modifié";

  updateMessage(message : string){
    this.message = message;

  }
}
