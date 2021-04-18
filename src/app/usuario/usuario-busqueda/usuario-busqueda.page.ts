import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/usuario-service.service'

@Component({
  selector: 'app-usuario-busqueda',
  templateUrl: './usuario-busqueda.page.html',
  styleUrls: ['./usuario-busqueda.page.scss'],
})
export class UsuarioBusquedaPage implements OnInit {

  datosUsuario = {}
  respuestaSmiluacion = {
    id: '12',
    nombreCompletoPersona: 'Camilo Rivera Ladino',
    nombreUsuario: 'crivera',
    codigoUsuario: 'US001'
  }

  constructor(private usuarioService: UsuarioServiceService) { }

  ngOnInit() {
  }

  consultarUsuarioPorId(usuario){
    
    this.datosUsuario = this.respuestaSmiluacion
    /*this.usuarioService.buscarUsuarioporId(usuario).subscribe((data) => {
      this.datosUsuario = data
      console.log(this.datosUsuario)
    })*/
  }
}
