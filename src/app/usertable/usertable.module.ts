import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { UsertableComponent } from './usertable.component';

const routes: Routes = [
  {path: 'load-me', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsertableModule { }
