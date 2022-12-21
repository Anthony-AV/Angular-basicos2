import { Component } from '@angular/core';

//Enlazado por una sola via.

@Component({
    selector:'app-heroe',
    templateUrl :'heroe.component.html'
})
export class HeroesComponent{
  public nombre: string = 'Iron man';
  public edad: number = 45;

  get nombreCapitalizado():String{
    return this.nombre.toUpperCase();
  }

  ObtenerNombre():string{
    return `${this.nombre} - ${this.edad}`;
  }

  CambiarNombre():string{
    return this.nombre='Spiderman';
  }

  CambiarEdad():void{
    this.edad = 30;
  }
}

