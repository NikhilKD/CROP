import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogComponent} from './log/log.component';

const routes: Routes = [
  { path:'login',component: LogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
