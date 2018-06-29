import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent, ManageTasksComponent, ManageUsersComponent, AdminDashboardComponent } from '.';
import { AuthGuard } from '../core';

const routes: Routes = [{
  path: 'admin',
  component: AdminComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: '',
      canActivateChild: [AuthGuard],
      children: [
        { path: 'users', component: ManageUsersComponent },
        { path: 'tasks', component: ManageTasksComponent },
        { path: '', component: AdminDashboardComponent },
      ]
    }
  ]
}];

export const adminRouterComponents = [AdminComponent, AdminDashboardComponent, ManageTasksComponent, ManageUsersComponent]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
