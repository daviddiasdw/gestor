import { Component, Input, OnInit } from '@angular/core';

const API = 'http://localhost:3000'

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  private urlOriginal = '';

  @Input() descricao = '';

  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.urlOriginal = url;
    } else {
      this.urlOriginal = `${API}/imgs/${url}`
    }
  }

  get url(): string{
    return this.urlOriginal;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
