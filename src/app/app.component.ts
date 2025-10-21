import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GussTheNumberComponent } from "./tasks/guss-the-number/guss-the-number.component";

@Component({
  selector: 'app-root',
  imports: [FormsModule, GussTheNumberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


}
