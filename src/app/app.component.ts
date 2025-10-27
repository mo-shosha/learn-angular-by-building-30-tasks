import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FeedbackFormsComponent } from "./tasks/feedback-forms/feedback-forms.component";
@Component({
  selector: 'app-root',
  imports: [FeedbackFormsComponent, FormsModule, FeedbackFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


}
