import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { userNameMinusculo } from './validacao.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService
    ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      fullName: ['',[Validators.required, Validators.minLength(5)] ],
      email: ['', [Validators.required, Validators.email] ],
      userName: ['', [userNameMinusculo], [this.novoUsuarioService.usuarioJaExiste()]],
      password: ['']
    });
  }

  cadastrar(){
    const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario)
  }

}
