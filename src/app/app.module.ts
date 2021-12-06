import { CabecalhoModule } from './components/cabecalho/cabecalho.module';
import { RodapeModule } from './components/rodape/rodape.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, RodapeModule, CabecalhoModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
