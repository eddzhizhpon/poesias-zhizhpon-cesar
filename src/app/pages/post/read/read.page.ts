import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/domain/post';
import { PostCreateService } from 'src/app/services/post-create.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.page.html',
  styleUrls: ['./read.page.scss'],
})
export class ReadPage implements OnInit {

  post: Post;
  comment: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private postService: PostCreateService) {

      route.queryParams.subscribe(params => {
        this.post = new Post();
        if (this.router.getCurrentNavigation()
              .extras.queryParams) {
          this.post = this.router.getCurrentNavigation()
                            .extras.queryParams.post;
        } else {
          this.router.navigate(['/home']);
        }
      });

     }

  ngOnInit() {
  }

  addComment() {
    if (this.comment == '' || this.comment == null) {
      return;
    }
    if (this.post.comentList == null) {
      this.post.comentList = [];
    }
    this.post.comentList.push(this.comment);
    this.postService.savePost(this.post);
  }

}
