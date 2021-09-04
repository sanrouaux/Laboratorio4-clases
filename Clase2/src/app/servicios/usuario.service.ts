import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  nombre:string;
  clave:string;

  constructor() { 
    this.nombre = '';
    this.clave = '';
  }
}
