import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {
  urlSignup = 'http://localhost:3000/user/signup'
  // urlUser = ``http://localhost:3000/user/exists/${nomeUsuario}`

  constructor(private httpClient: HttpClient) {}

 cadastraNovoUsuario(novoUsuario: NovoUsuario){
   return this.httpClient.post(this.urlSignup, novoUsuario);
 }

 verificarUsuarioExistente(nomeUsuario: string){
   return this.httpClient.get(`http://localhost:3000/user/exists/${nomeUsuario}`)
 }

 usuarioJaExiste(){
  return (control: AbstractControl) => {
    return control.valueChanges.pipe(switchMap((nomeUsuario) =>
      this.verificarUsuarioExistente(nomeUsuario)),
     map((usuarioExiste) =>
      usuarioExiste ? {usuarioExistente: true}: null),
      first()
    );
  }
}
}
