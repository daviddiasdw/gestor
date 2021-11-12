import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

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


  userNameMinusculo(control: AbstractControl){
    const valor = control.value as string;
    if(valor !== valor.toLowerCase()) {
      return { minusculo: true}
    } else {
      return null
    }
  }

  usuarioSenhaValidator(formGroup: FormGroup) {
    const username = formGroup.get('userName')?.value ?? '';
    const password = formGroup.get('password')?.value ?? '';

    if (username.trim() + password.trim()) {
      return username !== password ? null : { senhaIgualUsuario: true };
    } else {
      return null;
    }
  }

  aceitarTermos(){

  }
}
