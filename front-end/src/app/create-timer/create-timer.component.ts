import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Timer} from '../model/timer';
import {TimerService} from '../service/timer.service';

@Component({
    selector: 'app-create-timer',
    templateUrl: './create-timer.component.html',
    styleUrls: ['./create-timer.component.css']
})
export class CreateTimerComponent implements OnInit {

    date: Date = new Date();

    @Output() private timerCreated: EventEmitter<number>;

    constructor(private timerService?: TimerService) {
        this.timerCreated = new EventEmitter<number>();
    }

    ngOnInit() {
    }

    public setDate(dateString: string): boolean {
        const data = dateString.split('[-\s:]+');

        this.date = Date.apply(null, data);

        return true;
    }

    public createTimer(date: Date, message: string): boolean {
        const timer = new Timer(message, date.getTime());
        this.timerService.create(timer).subscribe((id) => this.timerCreated.emit(id));
        return false;
    }

}
