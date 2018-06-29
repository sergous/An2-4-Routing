import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent,UserFormComponent, UserListComponent } from '.';
import { CanDeactivateGuard } from '../core';

export const usersRouterComponents = [UsersComponent, UserListComponent, UserFormComponent];

const routes: Routes = [{
  path: 'users',
  component: UsersComponent,
  children: [
    {
      path: 'add',
      component: UserFormComponent
    },
    {
      path: 'edit/:userID',
      component: UserFormComponent,
      canDeactivate: [CanDeactivateGuard]
    },
    {
      path: '',
      component: UserListComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
