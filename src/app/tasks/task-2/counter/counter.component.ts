import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counter:number=1;

  Increase(){
    this.counter++;
    this.CounterStatus();
  }

  Decrease(){
    this.counter--;
    this.CounterStatus();
  }

  CounterStatus(){
    if(this.counter===0){
      return "Zero";
    }
    else if(this.counter>0){
      return "Positive";
    }
    else{
      return "Negative";
    }
  }
}
