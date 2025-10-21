import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss'
})
export class ProfileCardComponent {
  Name:string='Mohamed Shosha';
  Age:number=22
  Description: string = `Mohamed is a web developer with a passion for creating dynamic and user-friendly websites.`;

}
