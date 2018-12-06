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
    dateSet = false;

    @Output() private timerCreated: EventEmitter<number>;

    constructor(private timerService?: TimerService) {
        this.timerCreated = new EventEmitter<number>();
    }

    ngOnInit() {
    }

    public setDate(dateString: string) {
        const data = dateString.split(new RegExp('[\- .:]+'));

        const result = data.length > 0;
        if (result) {
            this.date = new Date(+data[0] ? +data[0] : new Date().getFullYear(),
                +data[1] ? +data[1] - 1 : 0,
                +data[2] ? +data[2] : 1,
                +data[3] ? +data[3] : 0,
                +data[4] ? +data[4] : 0,
                +data[5] ? +data[5] : 0,
                +data[6] ? +data[6] : 0);
            console.log(this.date);
            console.dir(data);
            this.dateSet = true;
        } else {
            this.dateSet = false;
        }
    }

    public createTimer(date: Date, message: string): boolean {
        const timer = new Timer(message, date.getTime());
        this.timerService.create(timer).subscribe((id) => this.timerCreated.emit(id));
        return false;
    }

}
