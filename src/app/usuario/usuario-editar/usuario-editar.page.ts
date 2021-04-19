import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/usuario-service.service'
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.page.html',
  styleUrls: ['./usuario-editar.page.scss'],
})
export class UsuarioEditarPage implements OnInit {

  idUsuario: any;
  objetoEditarUsuario = {}
  respuestaActualizacionUsuario = null
  

  constructor(
    private usuarioService: UsuarioServiceService,
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(parametros => {
      console.log(parametros)
      this.idUsuario = parametros.id
      console.log(this.idUsuario)
      this.consultarUsuarioPorId(parametros.id)
    })
  }
  consultarUsuarioPorId(usuario){
    this.usuarioService.buscarUsuarioporId(usuario).subscribe((data) => {
      this.objetoEditarUsuario = data
    })
  }

  actualizarUsuario(objetoEditarUsuario){
    this.usuarioService.actualizarUsuario(this.idUsuario, objetoEditarUsuario).subscribe((data) => {
      this.respuestaActualizacionUsuario = data
      this.objetoEditarUsuario = {}
      this.presentAlert('Exito!', 'Operación exitosa.', 'El usuario se ha actualizado exitosamente.')
      this.router.navigateByUrl('usuario-busqueda')
    })
  }

  async presentAlert(titulo, subtitulo, mensaje) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: titulo,
      subHeader: subtitulo,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
}
