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
export class ListaInscricao{
  Inscricao = 'string'
}

  



