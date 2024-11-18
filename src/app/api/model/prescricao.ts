class Prescricao {
  codPrescricao: number;
  medicamentos: string;
  quantidade: string;
  frequencia: string;
  duracao: string;
  observacoes: string;

  constructor(
    medicamentos: string,
    quantidade: string,
    frequencia: string,
    duracao: string,
    observacoes: string
  ) {
    this.codPrescricao = 1;
    this.medicamentos = medicamentos;
    this.quantidade = quantidade;
    this.frequencia = frequencia;
    this.duracao = duracao;
    this.observacoes = observacoes;
  }
}

export default Prescricao;
