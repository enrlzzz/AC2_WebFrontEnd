import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastrarInscricao } from './cadastrar-inscricao/cadastrar-inscricao';

@Component({
  imports: [RouterOutlet, CadastrarInscricao  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ProvaWebFront-End-10.09.2026');
}
