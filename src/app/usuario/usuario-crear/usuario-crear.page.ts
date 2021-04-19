import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/usuario-service.service'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-usuario-crear',
  templateUrl: './usuario-crear.page.html',
  styleUrls: ['./usuario-crear.page.scss'],
})
export class UsuarioCrearPage implements OnInit {

  objetoCrearUsuario = {}
  respuestaCreacionUsuario = null

  constructor(private usuarioService: UsuarioServiceService, private alertController: AlertController) { }

  ngOnInit() {
  }

  crearUsuario(objetoCrearUsuario){
    this.usuarioService.crearUsuario(objetoCrearUsuario).subscribe((data) => {
      this.respuestaCreacionUsuario = data
      this.objetoCrearUsuario = {}
      this.presentAlert()
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Exito!',
      subHeader: 'Operación exitosa!',
      message: 'El usuario se ha creado correctamente.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
