import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-paper-rock-scissors',
  imports: [CommonModule],
  templateUrl: './paper-rock-scissors.component.html',
  styleUrl: './paper-rock-scissors.component.scss'
})
export class PaperRockScissorsComponent {
  choices = ['Paper', 'Rock', 'Scissors'];
  userChoice: string | null = null
  computerChoice: string | null = null;
  resultMessage: string = '';
  
  selectChoice(choice: string) {
    this.userChoice = choice;
    this.computerChoice = this.choices[Math.floor(Math.random() * this.choices.length)];
    console.log(`User choice: ${this.userChoice}, Computer choice: ${this.computerChoice}`);
    this.resultMessage=this.getResult();
  }

  getResult(): string {
    if (!this.userChoice || !this.computerChoice) {
      return 'Make a choice to play';
    }
    if (this.userChoice === this.computerChoice) {
      return 'It\'s a tie';
    }
    if (
      (this.userChoice === 'Paper' && this.computerChoice === 'Rock') ||
      (this.userChoice === 'Rock' && this.computerChoice === 'Scissors') ||
      (this.userChoice === 'Scissors' && this.computerChoice === 'Paper')
    ) {
      return 'You win';
    }
    return 'Computer wins';
  }

  getpath(image: string): string {
    let ext = '.png';
    if (image.toLowerCase() === 'rock' || image.toLowerCase() === 'scissors') {
      ext = '.webp';
    }

    return `/images/${image.toLowerCase()}${ext}`;
  }

}
