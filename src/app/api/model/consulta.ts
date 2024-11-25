import Avaliacao from './avaliacao';
import Disponibilidade from './disponibilidade';
import Pagamento from './pagamento';
import Prescricao from './prescricao';

class Consulta {
  codConsulta: number;
  status: 'Marcada' | 'Feita';
  disponibilidade: Disponibilidade;
  pagamento: Pagamento;
  avaliacao: Avaliacao | undefined;
  prescricao: Prescricao | undefined;

  constructor(
    disponibilidade: Disponibilidade,
    valor: number,
    dataPagam: string,
    horaPagam: string,
    tipoPagam: string,
    avaliacao?: Avaliacao,
    prescricao?: Prescricao
  ) {
    this.codConsulta = 1;
    this.status = 'Marcada';
    this.disponibilidade = disponibilidade;
    this.pagamento = new Pagamento(valor, dataPagam, horaPagam, tipoPagam);
    this.avaliacao = avaliacao;
    this.prescricao = prescricao;
  }
}

export default Consulta;
