import {Component, OnInit} from '@angular/core';
import {Timer} from '../model/timer';
import {TimerService} from '../service/timer.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

    private diff;

    timer: Timer;

    constructor(private timerService: TimerService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.timerService.get(+this.route.snapshot.paramMap.get('id')).subscribe(res => {
            this.timer = res;
            this.diff = this.constructDiff(this.timer.diff - new Date().getTime());
            setInterval(() => {
                this.diff = this.constructDiff(this.timer.diff - new Date().getTime());
            }, 1000);
        });
    }

    private constructDiff(timeInMs: number) {
        const sec = Math.trunc(timeInMs / 1000);
        const min = Math.trunc(sec / 60);
        const hours = Math.trunc(min / 60);
        const days = Math.trunc(hours / 24);
        return {
            seconds: sec % 60,
            minutes: min % 60,
            hours: hours % 24,
            days
        };
    }

    getDays() {
        return this.diff.days;
    }

    getHours() {
        return this.diff.hours;
    }

    getMinutes() {
        return this.diff.minutes;
    }

    getSeconds() {
        return this.diff.seconds;
    }
}
