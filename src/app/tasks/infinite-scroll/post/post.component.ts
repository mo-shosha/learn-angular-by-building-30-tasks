import { Component, Input,OnInit  } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit {
  @Input() post!:{id:number,title:string,body:string};
  randomImageUrl!:string;
  
  ngOnInit(): void {
    this.generateRandomPhoto();
  }

  private generateRandomPhoto(): void {
    const randomId = this.generateRandomNumber(1000);
    this.randomImageUrl = `https://picsum.photos/id/${randomId}/600/400`;
  }


  private generateRandomNumber(max:number): number {
    return Math.floor(Math.random() * max);
  }

}
