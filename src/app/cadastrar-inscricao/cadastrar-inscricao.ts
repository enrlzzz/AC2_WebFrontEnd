import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InscricaoService } from '../inscricao-service';  
import { ListaInscricao } from '../lista-inscricao/lista-inscricao';
@Component({
  imports: [FormsModule, ListaInscricao],
  selector: 'app-cadastrar-inscricao',
  styleUrl: './cadastrar-inscricao.css',
  templateUrl: './cadastrar-inscricao.html',
})
export class CadastrarInscricao {
nome = '';
email = '';
oficinas = ['oficina de programacao', 'oficina de design', 'oficina de marketing'];  
listar() { return this.oficinas; 
}
confirmarInscricao(): void {
  console.log('confirmarInscricao', this.nome, this.email, this.oficinas);
}
remover(id: number): void {
  console.log('remover', id);
}
concluir(id: number): void {
  console.log('concluir', id);
}

id = 'string';
titulo = 'string';
removida = 'boolean';
concluida = 'boolean';


}
