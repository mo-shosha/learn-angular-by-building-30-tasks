import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TicTacToeComponent } from "./tasks/tic-tac-toe/tic-tac-toe.component";
@Component({
  selector: 'app-root',
  imports: [FormsModule,TicTacToeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


}
