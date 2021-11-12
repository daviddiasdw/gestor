import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(
    private service: AutenticacaoService,
    private router: Router
    ) { }

  login(){
    this.service.autenticar(this.usuario, this.senha).subscribe(
    ()=>{
      this.router.navigate(['produtos'])
    }
    )
  }

  ngOnInit(): void {
  }

}
