import { TokenService } from './../autenticacao/token.service';
import { Produtos } from './produtos';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listaDoUsuario(nomeDoUsuario: string): Observable<Produtos> {
    const token = this.tokenService.retornaToken();
    const headers = new HttpHeaders().append('x-access-token', token)
    return this.http.get<Produtos>(`${API}/${nomeDoUsuario}/photos`, {headers})
  }
}
