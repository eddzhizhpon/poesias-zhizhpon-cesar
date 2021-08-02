import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/domain/post';
import { HomeService } from 'src/app/services/home.service';
import { PostCreateService } from 'src/app/services/post-create.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // private postCollection: AngularFire

  postList: Observable<Post[]>

  constructor(private homeService: HomeService, 
    private postService: PostCreateService,
    private router: Router) { }

  ngOnInit() {
    this.postList = this.postService.getPosts();
  }

  readPost(post: Post) {
    let params: NavigationExtras = {
      queryParams: {
        post: post
      }
    };
    this.router.navigate(['/post/view'], params);
  }



}
