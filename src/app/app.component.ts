import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: String = 'timer';
  currentStatus: String = 'stop';
  timeObj: any;
  time: any;

  ngOnInit(): void {
    this.resetTimer();
    interval(1000).subscribe(() => {
      if (this.currentStatus === 'start' || this.currentStatus === 'restart') {
        this.timeObj.seconds++;
        this.updateTime();
      }
    });
  }

  // This method set current status 'start'
  startTimer() {
    this.currentStatus = 'start';
  }

  // This method set current status 'pause'
  pauseTimer() {
    this.currentStatus = 'pause';
  }

  // This method set current status 'restart'
  restartTimer() {
    this.currentStatus = 'restart';
  }

  // This method set current status 'stop'
  stopTimer() {
    this.resetTimer();
    this.currentStatus = 'stop';
  }

  // Update time object
  updateTime() {
    this.time = new Date(this.timeObj.year, this.timeObj.month, this.timeObj.day,
      this.timeObj.hours, this.timeObj.minutes, this.timeObj.seconds).getTime();
  }

  // Reset timer
  resetTimer() {
    this.timeObj = {
      year: 0,
      month: 0,
      day: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
    this.updateTime();
  }
}
