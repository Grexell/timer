import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TimerComponent} from './timer/timer.component';
import {CreateTimerComponent} from './create-timer/create-timer.component';
import {RoutingModule} from "./routing/routing.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        TimerComponent,
        CreateTimerComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule, RoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
