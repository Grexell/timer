import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TimerComponent} from './timer/timer.component';
import {CreateTimerComponent} from './create-timer/create-timer.component';
import {RoutingModule} from "./routing/routing.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        TimerComponent,
        CreateTimerComponent
    ],
    imports: [
        BrowserModule, RoutingModule, FormsModule, HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
