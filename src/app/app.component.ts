import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Iniciar Sesión', url: 'login', icon: 'log-in' },
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Publicar', url: 'post/create', icon: 'send' },
  ];
  constructor() {}
}
