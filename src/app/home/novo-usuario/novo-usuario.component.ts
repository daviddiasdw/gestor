import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
        fullName: ['',[Validators.required, Validators.minLength(5)] ],
        email: ['', [Validators.required, Validators.email] ],
        userName: ['', [this.novoUsuarioService.userNameMinusculo], [this.novoUsuarioService.usuarioJaExiste()]],
        password: ['']
    },
    {
      validators: [this.novoUsuarioService.usuarioSenhaValidator],
    }
    );
  }

  cadastrar(){
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe(
        () => {
          this.router.navigate([''])
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }

}
