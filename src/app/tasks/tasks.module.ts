import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { FormsModule } from '@angular/forms';
import { TaskListComponent, TaskComponent, TaskFormComponent } from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TasksRoutingModule
  ],
  declarations: [TaskListComponent, TaskComponent, TaskFormComponent]
})
export class TasksModule { }
