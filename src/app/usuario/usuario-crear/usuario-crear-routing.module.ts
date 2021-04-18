import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioCrearPage } from './usuario-crear.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioCrearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioCrearPageRoutingModule {}
