import { Router } from '@angular/router';
import { UserService } from './../../autenticacao/usuario/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  user$ = this.userService.retornaUsuario()

  constructor(private userService: UserService, private router: Router) { }

  logout() {
    this.userService.logout()
    this.router.navigate([''])
  }

  ngOnInit(): void {
  }

}
