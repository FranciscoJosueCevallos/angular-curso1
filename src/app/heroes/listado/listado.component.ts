import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes : string [] = ['Spiderman', 'goku', 'superman', 'ironman'];
  borrado:string = '';

  borrarHeroe (): void {
    const heroeBorrado = this.heroes.pop() || '' ;
    this.borrado = heroeBorrado ;
    console.log(this.heroes);
  }

}
