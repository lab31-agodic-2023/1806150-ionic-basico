import { Component } from '@angular/core';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  alumnos: any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];
}

