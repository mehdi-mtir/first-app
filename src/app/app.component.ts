import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template : `<div></div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon titre modifié';
  imageActuelle = "noir";
  imageURL = 'assets/logo2.png';
  jours = ["Lundi", "Mardi", "mercredi", "jeudi", "Vendredi", "samedi"];

  constructor(){

  }

  showMessage(){
    return("message");
  }

  changerImage(){
    if(this.imageActuelle == "noir"){
      this.imageURL = "assets/logo1.png";
      this.imageActuelle = "rouge";
    }
    else{
      this.imageURL = "assets/logo2.png";
      this.imageActuelle = "noir";
    }
  }
}
