import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Búsqueda usuario', url: '/usuario-busqueda', icon: 'search' },
    { title: 'Crear usuario', url: '/usuario-crear', icon: 'person-add' },
  ];
  constructor() {}
}
