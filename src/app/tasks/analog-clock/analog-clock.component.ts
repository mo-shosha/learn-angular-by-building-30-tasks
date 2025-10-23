import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-analog-clock',
  imports: [CommonModule],
  templateUrl: './analog-clock.component.html',
  styleUrl: './analog-clock.component.scss'
})
export class AnalogClockComponent implements OnInit {
  hourDeg = 0;
  minuteDeg = 0;
  secondDeg = 0;
  private timerId: any;
  ticks = Array(12).fill(0);


  ngOnInit(): void {
    this.updateTime();
    this.timerId = setInterval(() => this.updateTime(), 1000);
  }


  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  private updateTime(): void {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;

    this.secondDeg = seconds * 6;
    this.minuteDeg = minutes * 6 + seconds * 0.1;
    this.hourDeg = hours * 30 + minutes * 0.5;
  }

  get digitalTime(): string {
    const now = new Date();
    return now.toLocaleTimeString();
  }
}
