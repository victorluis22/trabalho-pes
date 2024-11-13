import { v4 as uuid } from 'uuid';

class Avaliacao {
  codAvaliacao: string;
  descricao: string;
  nota: number;

  constructor(descricao: string, nota: number) {
    this.codAvaliacao = uuid();
    this.descricao = descricao;
    this.nota = nota;
  }
}

export default Avaliacao;
