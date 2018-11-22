import { Component, OnInit } from '@angular/core';
import construct = Reflect.construct;

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  private dateTo: Date;
  private diff;

  constructor() {
    this.dateTo = new Date(2019, 7, 17);
    this.diff = this.constructDiff(this.dateTo.getTime() - new Date().getTime());
  }

  ngOnInit() {
    setInterval(() => {
      this.diff = this.constructDiff(this.dateTo.getTime() - new Date().getTime());
    }, 1000);
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
