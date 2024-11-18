class Pagamento {
  codPagamento: number;
  valor: number;
  dataPagam: string;
  horaPagam: string;
  tipo: string;

  constructor(
    valor: number,
    dataPagam: string,
    horaPagam: string,
    tipo: string
  ) {
    this.codPagamento = 1;
    this.valor = valor;
    this.dataPagam = dataPagam;
    this.horaPagam = horaPagam;
    this.tipo = tipo;
  }
}

export default Pagamento;
