import Horario from './horario';
import Medico from './medico';

class Disponibilidade {
  codDisp: number;
  data: string;
  horario: Horario;
  medico: Medico;

  constructor(codDisp: number, data: string, horario: Horario, medico: Medico) {
    this.codDisp = codDisp;
    this.data = data;
    this.horario = horario;
    this.medico = medico;
  }
}

export default Disponibilidade;
