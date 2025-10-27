import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback-forms',
  imports: [CommonModule, FormsModule],
  templateUrl: './feedback-forms.component.html',
  styleUrl: './feedback-forms.component.scss'
})
export class FeedbackFormsComponent {
    feedback = {
    name: '',
    email: '',
    feedback: '',
  };
  submitted = false;

  onSubmit(form: any) {
    if (!form.valid) return;
    console.log('Form Submitted!', this.feedback);
    this.submitted = true;
  }

}
