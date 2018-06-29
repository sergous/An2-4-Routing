import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent, PathNotFoundComponent, MessagesComponent, AuthService, MessagesService, AuthGuard, DialogService, LoginComponent, CanDeactivateGuard } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutComponent, PathNotFoundComponent, MessagesComponent, LoginComponent],
  providers: [AuthGuard, CanDeactivateGuard, AuthService, MessagesService, DialogService]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.')
    }
  }
}
