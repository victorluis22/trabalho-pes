class Pagamento {
  codPagamento: number;
  valor: number;
  dataPagam: string;
  horaPagam: string;
  tipoPagam: string;

  constructor(
    valor: number,
    dataPagam: string,
    horaPagam: string,
    tipoPagam: string
  ) {
    this.codPagamento = 1;
    this.valor = valor;
    this.dataPagam = dataPagam;
    this.horaPagam = horaPagam;
    this.tipoPagam = tipoPagam;
  }
}

export default Pagamento;
