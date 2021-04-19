import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioEditarPage } from './usuario-editar.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioEditarPageRoutingModule {}
