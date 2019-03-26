import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
const routes: Routes =[
  {path: 'users', loadChildren: './usertable/usertable.module#UsertableModule'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
