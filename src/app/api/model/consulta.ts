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
    pagamento: Pagamento,
    avaliacao?: Avaliacao,
    prescricao?: Prescricao
  ) {
    this.codConsulta = 1;
    this.status = 'Marcada';
    this.pagamento = pagamento;
    this.disponibilidade = disponibilidade;
    this.avaliacao = avaliacao;
    this.prescricao = prescricao;
  }
}

export default Consulta;
