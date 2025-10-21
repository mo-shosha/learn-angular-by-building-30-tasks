import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guss-the-number',
  imports: [FormsModule],
  templateUrl: './guss-the-number.component.html',
  styleUrl: './guss-the-number.component.scss'
})
export class GussTheNumberComponent {
randomNumber: number = Math.floor(Math.random() * 100) + 1;
  userGuess: number | null = null;
  feedbackMessage: string = '';
  attempts: number = 0;
  sussed:boolean=false;

  checkGuess() {
    if (this.userGuess === null) {
      this.feedbackMessage = 'Please enter a number first!';
      return;
    }
    if(this.sussed===false){
      this.attempts++;
    }
    if (this.userGuess === this.randomNumber) {
      this.sussed=true;
      this.feedbackMessage = `🎉 Correct! You guessed the number ${this.randomNumber} in ${this.attempts} attempts!`;
    } else if (this.userGuess < this.randomNumber) {
      this.feedbackMessage = '📉 Too low! Try a higher number.';
    } else {
      this.feedbackMessage = '📈 Too high! Try a lower number.';
    }
  }

  resetGame() {
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
    this.userGuess = null;
    this.feedbackMessage = '';
    this.attempts = 0;
  }
}
