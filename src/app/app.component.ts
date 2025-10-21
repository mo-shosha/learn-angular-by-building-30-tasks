import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DynamicFilterListComponent } from "./tasks/dynamic-filter-list/dynamic-filter-list.component";
@Component({
  selector: 'app-root',
  imports: [DynamicFilterListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


}
