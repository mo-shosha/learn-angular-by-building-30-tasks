import { Component,HostListener,OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { PostComponent } from '../post/post.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [FormsModule,CommonModule ,PostComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {
  posts: any[] = [];
  loading=false;
  page=1;
  limit=10;

  constructor(private postService:PostService) { }

  ngOnInit() {
    this.loadPosts();
    //console.log(this.posts);
  }


  loadPosts(): void {
    this.loading = true;
    this.postService.GetPosts(this.page, this.limit).subscribe({
      next: (data) => {
        this.posts = [...this.posts, ...data];
        this.page++;
      },
      error: (err) => {
        console.error('Error loading posts:', err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500 && !this.loading) {
      this.loadPosts();
    }
  }

}
