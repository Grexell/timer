import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TimerComponent} from "../timer/timer.component";
import {CreateTimerComponent} from "../create-timer/create-timer.component";

const routes: Routes = [
    {path: 'timer/:id', component: TimerComponent },
    {path: 'create', component: CreateTimerComponent },
    {path: '', redirectTo: '/create', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
