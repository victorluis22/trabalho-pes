import Avaliacao from './avaliacao';
import Disponibilidade from './disponibilidade';

class Consulta {
  status: 'Marcada' | 'Feita';
  disponibilidade: Disponibilidade;

  // avaliacao: Avaliacao | null;

  constructor() {
    this.status = 'Marcada';
    // this.avaliacao = null;
  }
}

export default Consulta;
