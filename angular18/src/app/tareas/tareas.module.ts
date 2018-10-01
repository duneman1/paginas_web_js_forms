import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasSimpleComponent } from './tareas-simple/tareas-simple.component';
import { TareasPlusComponent } from './tareas-plus/tareas-plus.component';
import { FormsModule } from '@angular/forms';
import { TareasComponent } from './tareas.component';

@NgModule({
  imports: [
    CommonModule,
    TareasRoutingModule,
    FormsModule
  ],
  declarations: [
    TareasComponent,
    TareasSimpleComponent,
    TareasPlusComponent
  ]
})
export class TareasModule { }
