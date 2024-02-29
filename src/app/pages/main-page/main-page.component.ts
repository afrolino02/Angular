

import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { tareas} from '../../interfaces/tareas.interface'
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {
  public listaDeTareas : tareas[] = []


  @Output()
  agregarTareas(tarea: tareas) : void{
    const nuevaTarea = {
      ...tarea
    };

    this.listaDeTareas.push(nuevaTarea)
  }


}
