import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {
  urlSignup = 'http://localhost:3000/user/signup'
  urlUser = 'http://localhost:3000/user/exists/${nomeUsuario}'

  constructor(private httpClient: HttpClient) {}

 cadastraNovoUsuario(novoUsuario: NovoUsuario){
   return this.httpClient.post(this.urlSignup, novoUsuario);
 }

 verificarNovoExistente(nomeUsuario: string){
   return this.httpClient.get(this.urlUser)
 }
}
