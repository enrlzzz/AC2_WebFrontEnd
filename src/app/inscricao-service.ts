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
    confirmarInscricao(id: number): void {
        console.log('confirmarInscricao');
    }

}
