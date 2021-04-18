import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioBusquedaPageRoutingModule } from './usuario-busqueda-routing.module';

import { UsuarioBusquedaPage } from './usuario-busqueda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioBusquedaPageRoutingModule
  ],
  declarations: [UsuarioBusquedaPage]
})
export class UsuarioBusquedaPageModule {}
