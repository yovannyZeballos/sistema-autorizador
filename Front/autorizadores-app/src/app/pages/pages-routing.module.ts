import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorizadorComponent } from './autorizador/autorizador.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'autorizador',
      component: AutorizadorComponent,
      data:{
        titulo:'Asignacion de autorizador'
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
