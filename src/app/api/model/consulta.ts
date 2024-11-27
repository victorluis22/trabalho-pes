import Disponibilidade from './disponibilidade';
import Pagamento from './pagamento';

class Consulta {
  codConsulta: number;
  status: 'Marcada' | 'Feita';
  disponibilidade: Disponibilidade;
  pagamento: Pagamento;

  constructor(
    disponibilidade: Disponibilidade,
    valor: number,
    dataPagam: string,
    horaPagam: string,
    tipoPagam: string
  ) {
    this.codConsulta = 1;
    this.status = 'Marcada';
    this.disponibilidade = disponibilidade;
    this.pagamento = new Pagamento(valor, dataPagam, horaPagam, tipoPagam);
  }
}

export default Consulta;
