import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/app/domain/post';
// import { User } from 'src/app/domain/user';
import { AuthService } from 'src/app/services/auth.service';
import { PostCreateService } from 'src/app/services/post-create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  user: any;
  imgData: any;

  post: Post = new Post();

  constructor(private route: ActivatedRoute, 
    private router: Router,
    private postService: PostCreateService, 
    private toastController: ToastController,
    private authService: AuthService) { 

      this.user = authService.getCurrentUser().then(user => {
        this.user = user;
        if (this.user == null) {
          this.router.navigate(['/login']);
          this.showToast("Debe iniciar sesión para publicar")
        }
      });
      
    }

  ngOnInit() {
    this.post = new Post();
  }

  showToast(msg) {
    this.toastController.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

  imageSelectedEvt(data: any) {
    // console.log(data);
    this.imgData = data;
  }

  uploadFinishedEvt(data: any) {
    this.post.image = data;
  }

  createPost(){
    this.post.date = new Date();
    this.post.user = this.user;
    this.postService.savePost(this.post).then(() => {
      this.router.navigate(['/']);
      this.showToast('Publicación Creada');
    }, err=>{
      console.log(err);
    });
  }

}
