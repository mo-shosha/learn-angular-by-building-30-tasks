import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dynamic-filter-list',
  imports: [FormsModule],
  templateUrl: './dynamic-filter-list.component.html',
  styleUrl: './dynamic-filter-list.component.scss'
})
export class DynamicFilterListComponent {
ListItems = [
  "Angular",
  "React",
  "Vue",
  "Svelte",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL Server",
  "Python",
  "Django",
  "Flask",
  "C#",
  ".NET",
  "Java",
  "Spring Boot",
  "GitHub"
];
  FilteredItems = [...this.ListItems];
  FilterText = '';
  onFilterChange() {
    this.FilteredItems = this.ListItems.filter(item =>
      item.toLowerCase().includes(this.FilterText.toLowerCase())
    );
  }

}
