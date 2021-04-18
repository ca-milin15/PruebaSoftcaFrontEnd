import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioCrearPageRoutingModule } from './usuario-crear-routing.module';

import { UsuarioCrearPage } from './usuario-crear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioCrearPageRoutingModule
  ],
  declarations: [UsuarioCrearPage]
})
export class UsuarioCrearPageModule {}
