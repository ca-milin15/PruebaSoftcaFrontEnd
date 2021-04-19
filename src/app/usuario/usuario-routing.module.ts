import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioPage } from './usuario.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioPage
  },
  {
    path: 'usuario-busqueda',
    loadChildren: () => import('./usuario-busqueda/usuario-busqueda.module').then( m => m.UsuarioBusquedaPageModule)
  },
  {
    path: 'usuario-crear',
    loadChildren: () => import('./usuario-crear/usuario-crear.module').then( m => m.UsuarioCrearPageModule)
  },
  {
    path: 'usuario-editar/:parameter',
    loadChildren: () => import('./usuario-editar/usuario-editar.module').then( m => m.UsuarioEditarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioPageRoutingModule {}
