import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { PathNotFoundComponent } from './components/path-not-found/path-not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AboutComponent, PathNotFoundComponent]
})
export class CoreModule { }
