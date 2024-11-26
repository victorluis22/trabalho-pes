import catalogoDisponibilidade from '../model/catalogoDisponibilidade';
import catalogoPaciente from '../model/catalogoPaciente';
import Disponibilidade from '../model/disponibilidade';
import Paciente from '../model/paciente';

interface criarConsultaReqProps {
  codPaciente: number;
  codDisp: number;
  valor: number;
  dataPagam: string;
  horaPagam: string;
  tipoPagam: string;
}

class MarcaConsultaController {
  constructor() {}

  async criarConsulta(req: Request) {
    const {
      codPaciente,
      codDisp,
      valor,
      dataPagam,
      horaPagam,
      tipoPagam,
    }: criarConsultaReqProps = await req.json();

    const paciente: Paciente | undefined =
      catalogoPaciente.encontraPaciente(codPaciente);

    if (!paciente) {
      return Response.json({ error: 'Paciente não encontrado' });
    }

    const disponibilidade: Disponibilidade | undefined =
      catalogoDisponibilidade.encontraDisponibilidade(codDisp);

    if (!disponibilidade) {
      return Response.json({ error: 'Disponibilidade não encontrada' });
    }

    paciente.criaConsulta(
      disponibilidade,
      valor,
      dataPagam,
      horaPagam,
      tipoPagam
    );

    return Response.json(paciente);
  }
}

const marcaConsultaController = new MarcaConsultaController();

export default marcaConsultaController;
