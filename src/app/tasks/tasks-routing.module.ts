import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent, TaskFormComponent } from './components';

const routes: Routes = [
  {
    path: 'home',
    component: TaskListComponent,
    data: {
      title: 'Task Manager',
      meta: [
        {
          name: 'description',
          content: 'Task Manager application',
        },
        {
          name: 'keywords',
          content: 'Angular 6 tutorial, SPA application, Routing',
        },
      ],
    },
  },
  {
    path: 'edit/:taskID',
    component: TaskFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
