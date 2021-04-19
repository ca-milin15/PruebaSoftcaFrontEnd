import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  urlBase = 'http://localhost:5000/api-rest/arbol-b/servicio'
  urlUsuarioModulo = '/usuario'

  constructor(private http: HttpClient) {
  }

  buscarUsuarioporId(usuarioId){
    return this.http.get(this.urlBase + this.urlUsuarioModulo + '/' + usuarioId)
  }

  crearUsuario(objetoUsuario){
    return this.http.post(this.urlBase + this.urlUsuarioModulo, objetoUsuario)
  }

  actualizarUsuario(usuarioId, objetoUsuario){
    return this.http.put(this.urlBase + this.urlUsuarioModulo + '/' + usuarioId, objetoUsuario)
  }
}
