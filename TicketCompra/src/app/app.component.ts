import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  articulo = '';
  precio = '';
  total = 0;
  listaArticulos: { articulo: string; precio: number }[] = [];

  agregarArticulo() {
    if (this.articulo && this.precio) {
      const precioNumerico = parseFloat(this.precio);
      if (!isNaN(precioNumerico)) {
        this.listaArticulos.push({ articulo: this.articulo, precio: precioNumerico });
        this.total += precioNumerico;
        this.articulo = '';
        this.precio = '';
      }
    }
  }
}
