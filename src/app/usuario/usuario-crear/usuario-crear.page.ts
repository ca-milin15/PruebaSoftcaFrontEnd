import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/usuario-service.service'

@Component({
  selector: 'app-usuario-crear',
  templateUrl: './usuario-crear.page.html',
  styleUrls: ['./usuario-crear.page.scss'],
})
export class UsuarioCrearPage implements OnInit {

  objetoCrearUsuario = {}
  respuestaCreacionUsuario = {}

  constructor(private usuarioService: UsuarioServiceService) { }

  ngOnInit() {
  }

  crearUsuario(objetoCrearUsuario){
    this.usuarioService.crearUsuario(objetoCrearUsuario).subscribe((data) => {
      this.respuestaCreacionUsuario = data
      console.log(this.respuestaCreacionUsuario)
    })
  }
}
