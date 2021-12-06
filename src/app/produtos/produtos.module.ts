import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { ProdutoComponent } from './produto/produto.component';


@NgModule({
  declarations: [
    RelatorioComponent,
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
