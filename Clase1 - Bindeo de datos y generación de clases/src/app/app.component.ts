import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'my-app';
  usuario:Usuario;

  constructor() {
    this.usuario = new Usuario();
  }

  sayHi() {
    alert("Hola");
  }
}
