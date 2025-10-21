import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss']
})
export class StopWatchComponent {
  minutes: number = 0;
  seconds: number = 0;
  milliseconds: number = 0;
  timer: any;
  running: boolean = false;

  start() {
    if (!this.running) {
      this.running = true;
      this.timer = setInterval(() => {
        this.milliseconds += 10;
        if (this.milliseconds >= 1000) {
          this.milliseconds = 0;
          this.seconds++;
        }
        if (this.seconds >= 60) {
          this.seconds = 0;
          this.minutes++;
        }
      }, 10);
    }
  }

  stop() {
    clearInterval(this.timer);
    this.running = false;
  }

  reset() {
    clearInterval(this.timer);
    this.minutes = 0;
    this.seconds = 0;
    this.milliseconds = 0;
    this.running = false;
  }

  formatTime(value: number, digits: number = 2): string {
    return value.toString().padStart(digits, '0');
  }
}
