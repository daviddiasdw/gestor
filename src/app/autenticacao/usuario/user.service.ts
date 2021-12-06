import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode'
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usuarioSubject = new BehaviorSubject<User>({})

  constructor(private tokenService: TokenService) {
    if(this.tokenService.possuiToken()){
      this.decodificaJWT();
    }
   }

  private decodificaJWT(){
    const token = this.tokenService.retornaToken();
    const usuario = jwt_decode(token) as User;
    this.usuarioSubject.next(usuario)
  }

  retornaUsuario(){
    return this.usuarioSubject.asObservable()
  }

  salvaToken(token: string) {
    this.tokenService.salvaToken(token)
  }

  logout() {
    this.tokenService.excluiToken()
    this.usuarioSubject.next({})
  }

  estaLogado(){
    return this.tokenService.possuiToken()
  }
}
