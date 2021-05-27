import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes : Personaje[] = [
    {
      nombre:"Goku",
      poder: 15000},
    {
      nombre:"Vegeta",
      poder: 8500
    }
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregarNuevoPersonaje (argumentoPersonaje : Personaje){

    this.personajes.push(argumentoPersonaje);
    console.log(this.personajes);
  }

  constructor(private dbzService:DbzService){ }

/*
  cambiarNombre( event : any ){
    console.log(event.target.value);
  }
*/


}
