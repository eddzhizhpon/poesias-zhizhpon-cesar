import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService,
    private toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
  }

  googleLogin() {
    this.authService.googleLogin().then(user => {
      if (user !== null) {
        this.showToast("Inicio de sesión Correcto");
        this.router.navigate(['/']);
      } else {
        this.showToast("No se pudo iniciar sesión");
      }
    });
  }

  logout() {
    this.authService.logout().then(data => {
      this.showToast("Se cerró sesión");
    });
  }

  showToast(msg) {
    this.toastController.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}
