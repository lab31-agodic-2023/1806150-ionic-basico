import { Component } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})
export class ListaAlumnosComponent {
  alumnos: string[] = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];
  alumnosFavoritos: string[] = [];
  constructor(
    private alertController: AlertController,
    private actionSheetController: ActionSheetController
  ) {}

  async agregarAFavoritos(alumno: string) {
  
    if (!this.alumnosFavoritos.includes(alumno)) {

      this.alumnosFavoritos.push(alumno);

    } else {
      const alert = await this.alertController.create({
        header: 'Advertencia',
        message: 'Este alumno ya está en la lista de favoritos.',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }
  
  async eliminarAlumno(alumno: string) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Eliminar Alumno',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.alumnos = this.alumnos.filter(a => a !== alumno);
            this.alumnosFavoritos = this.alumnosFavoritos.filter(a => a !== alumno);
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    await actionSheet.present();
  }
}

