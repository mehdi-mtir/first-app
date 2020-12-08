import { Injectable } from '@angular/core';

@Injectable({
  providedIn : "root"
})
export class DemoService {
  z : number;
  message : string;

  constructor() {
    console.log("Je suis en train de créer une instance du service");
  }


  showMessage(msg : string){
    console.log("Message emis par le service");
    this.message = msg;
  }


  somme(x : number, y : number): void{
    this.z = x + y;
  }
}
