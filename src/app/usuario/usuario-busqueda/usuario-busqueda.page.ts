import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/usuario-service.service'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-usuario-busqueda',
  templateUrl: './usuario-busqueda.page.html',
  styleUrls: ['./usuario-busqueda.page.scss'],
})
export class UsuarioBusquedaPage implements OnInit {

  datosUsuario = null
  respuestaSmiluacion = {
    id: '12',
    nombreCompletoPersona: 'Camilo Rivera Ladino',
    nombreUsuario: 'crivera',
    codigoUsuario: 'US001'
  }

  constructor(private usuarioService: UsuarioServiceService, private alertController: AlertController) { }

  ngOnInit() {
  }

  consultarUsuarioPorId(usuario){
    if(usuario){
      this.usuarioService.buscarUsuarioporId(usuario).subscribe((data) => {
        this.datosUsuario = data
      })
    } else {
      this.presentAlert('Alerta', 'No se ejecutó la consulta', 'Debe completar el campo ID de usuario.')
    }
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
