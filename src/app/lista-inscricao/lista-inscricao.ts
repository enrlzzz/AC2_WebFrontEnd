import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Inscricao } from '../inscricao';
import { InscricaoService } from '../inscricao-service';
import { CadastrarInscricao } from '../cadastrar-inscricao/cadastrar-inscricao';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterLink, CadastrarInscricao],
  selector: 'app-lista-inscricao',
  styleUrl: './lista-inscricao.css',
  templateUrl: './lista-inscricao.html',
})
export class ListaInscricao {
  id = '';
  titulo = '';
  removida = false;
  concluida = false;
  constructor (private inscricaoService: InscricaoService) {
    this.id = '';
    this.titulo = '';
    this.removida = false;
    this.concluida = false;
  }  

  selecionar(id: number): void {
    console.log('selecionar', id);
  }
  remover(id: number): void {
    console.log('remover', id);
  }
  confirmarInscricao(id: number): void {
    console.log('confirmarInscricao', id);
  }
  concluir(id: number): void {
    console.log('concluir', id);
  }

  listaInscricao = [
    { id: 1, titulo: 'Oficina de programação', removida: false, concluida: false },
    { id: 2, titulo: 'Oficina de design', removida: false, concluida: false },
    { id: 3, titulo: 'Oficina de marketing', removida: false, concluida: false },
  ];

}
