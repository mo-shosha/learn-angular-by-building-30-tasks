import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaperRockScissorsComponent } from "./tasks/paper-rock-scissors/paper-rock-scissors.component";
@Component({
  selector: 'app-root',
  imports: [PaperRockScissorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


}
