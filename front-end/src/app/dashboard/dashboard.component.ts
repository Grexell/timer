import { Component, OnInit } from '@angular/core';
import {Timer} from '../model/timer';
import {TimerService} from '../service/timer.service';
import {FormControl, FormGroup} from '@angular/forms';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  timers: Timer[];
  form = new FormGroup({
      id: new FormControl('')
  });

  constructor(private timerService: TimerService) {
    this.timers = [];
  }

  ngOnInit() {
  }

  loadTimer() {
    this.timerService.get(this.form.value.id).pipe(catchError((err) => {
      console.log(err);
      return of(null);
    })).subscribe(timer => {
      if (timer) {
        this.timers.push(timer);
      }
      console.log(timer);
    });
  }
}
