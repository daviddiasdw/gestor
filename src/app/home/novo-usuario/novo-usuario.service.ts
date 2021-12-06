import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private httpClient: HttpClient) {}

 cadastraNovoUsuario(novoUsuario: NovoUsuario){
   return this.httpClient.post(`${API}/user/signup`, novoUsuario);
 }

 verificarUsuarioExistente(nomeUsuario: string){
   return this.httpClient.get(`${API}/user/exists/${nomeUsuario}`)
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
