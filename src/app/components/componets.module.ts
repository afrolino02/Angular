import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { FormularioComponent } from './formulario/formulario.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    FormularioComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormularioComponent,
    ListComponent
  ]
})
export class ComponetsModule { }
