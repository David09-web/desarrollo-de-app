import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importante para el [(ngModel)]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule], // Necesario para manejar inputs
  templateUrl: './app.html'
})
export class App {
  nuevaTarea: string = '';
  listaTareas: string[] = [];

  agregarTarea() {
    if (this.nuevaTarea.trim() !== "") {
      this.listaTareas.push(this.nuevaTarea);
      this.nuevaTarea = ''; // Limpiamos el input
    }
  }
}
