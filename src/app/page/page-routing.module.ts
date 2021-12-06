import { NovoUsuarioComponent } from './../home/novo-usuario/novo-usuario.component';
import { PageComponent } from './page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PageComponent
  },
  {
    path: 'novousuario',
    component: NovoUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
