import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface ConfettiPiece {
  left: string;
  background: string;
  animationDelay: string;
}
@Component({
  selector: 'app-tic-tac-toe',
  imports: [CommonModule],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss'
})
export class TicTacToeComponent {
  board: string[] = Array(9).fill('');
  currentPlayer: string = 'X';
  winner: string | null = null;
  showConfetti: boolean = false;
  confettiPieces: ConfettiPiece[] = [];

  winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  makeMove(index: number) {
    if (!this.board[index] && !this.winner) {
      this.board[index] = this.currentPlayer;
      const winner = this.checkWinner();

      if (winner) {
        this.winner = winner;
        this.triggerConfetti();
      } else if (!this.board.includes('')) {
        this.winner = 'Draw';
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner() {
    for (let combo of this.winningCombinations) {
      const [a, b, c] = combo;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return this.board[a];
      }
    }
    return null;
  }

  reset() {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.winner = null;
    this.showConfetti = false;
    this.confettiPieces = [];
  }

  triggerConfetti() {
    this.confettiPieces = Array.from({ length: 60 }).map(() => ({
      left: `${Math.random() * 100}%`,
      background: `hsl(${Math.random() * 360}, 100%, 50%)`,
      animationDelay: `${Math.random() * 2}s`
    }));

    this.showConfetti = true;
    setTimeout(() => {
      this.showConfetti = false;
      this.reset();
    }, 4000);

  }
}
