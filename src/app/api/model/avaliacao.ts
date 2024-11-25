class Avaliacao {
  codAvaliacao: number;
  descricao: string;
  nota: number;

  constructor(descricao: string, nota: number) {
    this.codAvaliacao = 1;
    this.descricao = descricao;
    this.nota = nota;
  }
}

export default Avaliacao;
