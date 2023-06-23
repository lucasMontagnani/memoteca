import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listaPensamentos = [
    {
      conteudo: 'I love Angular',
      autoria: 'Nay',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Teste',
      autoria: 'Nay',
      modelo: 'modelo1'
    },
    {
      conteudo: 'TesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTeTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTesteTeste',
      autoria: 'Nay',
      modelo: 'modelo2'
    }
  ];

}
