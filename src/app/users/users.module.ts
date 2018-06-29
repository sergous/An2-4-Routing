import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule, usersRouterComponents } from './users-routing.module';
import { FormsModule } from '@angular/forms';
import { UserComponent, UserArrayService, UserResolveGuard } from '.';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [usersRouterComponents, UserComponent],
  providers: [UserArrayService, UserResolveGuard]
})
export class UsersModule { }
