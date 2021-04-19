import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioEditarPageRoutingModule } from './usuario-editar-routing.module';

import { UsuarioEditarPage } from './usuario-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioEditarPageRoutingModule
  ],
  declarations: [UsuarioEditarPage]
})
export class UsuarioEditarPageModule {}
