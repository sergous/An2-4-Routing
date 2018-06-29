import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import {
  AboutComponent,
  PathNotFoundComponent,
  MessagesComponent,
  LoginComponent,
  AuthGuard,
  CustomPreloadingStrategyService,
} from './core';

const extraOptions: ExtraOptions = {
  preloadingStrategy: CustomPreloadingStrategyService,
  enableTracing: true,
};

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' },
  },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    loadChildren: 'app/admin/admin.module#AdminModule',
    data: { title: 'Admin' },
  },
  {
    path: 'users',
    loadChildren: 'app/users/users.module#UsersModule',
    data: {
      preload: false,
      title: 'Users',
    },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'messages',
    component: MessagesComponent,
    outlet: 'popup',
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: '**',
    component: PathNotFoundComponent,
    data: {
      title: 'Page not found',
    },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
