import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioBusquedaPage } from './usuario-busqueda.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioBusquedaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioBusquedaPageRoutingModule {}
