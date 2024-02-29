
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { tareas } from '../../interfaces/tareas.interface'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
 @Input()
 public listaDeTareas : tareas[] = []
}
