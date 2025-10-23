import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnalogClockComponent } from './tasks/analog-clock/analog-clock.component';
@Component({
  selector: 'app-root',
  imports: [AnalogClockComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


}
