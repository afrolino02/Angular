import { tareas } from './../../interfaces/tareas.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { every } from 'rxjs';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  public listaDeTareas: tareas = {
    id: Date.now(),
    descripcion: '',
    estado: false
  };

  @Output()
  public agregarTarea : EventEmitter<tareas> = new EventEmitter();
  emitirFormulario(): void{
    this.agregarTarea.emit({...this.listaDeTareas})

    this.listaDeTareas = {
      id: Date.now(),
      descripcion: '',
      estado: false
    }
  }



}
