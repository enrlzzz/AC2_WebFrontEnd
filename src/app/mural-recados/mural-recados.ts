import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [],
  selector: 'app-mural-recados',
  styleUrl: './mural-recados.css',
  templateUrl: './mural-recados.html',
})
export class MuralRecados {

  Recados = [

    {
      title: 'Recado1',
      content: 'Primeiro recado',
      likes: false,
      RecadoSelecionado: [],
      NovoRecado: [],
      boolean: false,
     
    },
    {
      title: 'Recado2',
      content: 'Segundo recado',
      likes: false,
      RecadoSelecionado: [],
      boolean: false,

      
    },
    {
      title: 'Recado3',
      content: 'Terceiro recado',
      likes: false,
      RecadoSelecionado: [],
      NovoRecado: [],
      boolean: false,
     
      
    },
    {
      title: 'Recado4',
      content: 'Quarto recado',
      likes: false,
      RecadoSelecionado: [],
      NovoRecado: [],
      boolean: false,

      

    }


  ]


  selecionada = 'false';
  contador = 0;

  enviar() {
    console.log('Recado enviado');
  }

  incrementar() { this.contador++; };
  decrementar() { this.contador--; };
  

}

