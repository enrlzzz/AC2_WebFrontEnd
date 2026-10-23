import { Service } from '@angular/core';
import { Inscricao } from './inscricao';

@Service()
export class InscricaoService {

    listar(): Inscricao[] {
        return [];
    }
    adicionar(inscricao: Inscricao): void {
        console.log('adicionar', inscricao);
    }
    remover(id: number): void {
        console.log('remover', id);
    }

    concluirInscricao(id: number): void {
        console.log('concluirInscricao', id);
    }
    confirmarInscricao(nome: string, email: string, oficinas: string[]): void {
        console.log('confirmarInscricao', nome, email, oficinas);
    }

    
}
