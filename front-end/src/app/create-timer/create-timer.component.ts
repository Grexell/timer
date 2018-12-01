import { Component, OnInit } from '@angular/core';
import { FormsModule} from "@angular/forms";
import {Timer} from "../model/timer";

@Component({
  selector: 'app-create-timer',
  templateUrl: './create-timer.component.html',
  styleUrls: ['./create-timer.component.css']
})
export class CreateTimerComponent implements OnInit {

  message = '';
  date = new Date();
  // date = new Date();

  constructor() {
  }

  ngOnInit() {
  }

  create

}
