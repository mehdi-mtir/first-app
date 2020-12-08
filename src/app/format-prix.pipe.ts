import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrix'
})
export class FormatPrixPipe implements PipeTransform {

  transform(value: number, monnaie : string): string {
    let prixAffiche : string;
    if(monnaie == "$"){
      prixAffiche = value + " " + monnaie;
    }
    else{
      prixAffiche = (value * 1.2) + " " + monnaie;
    }
    return prixAffiche;

  }

}
