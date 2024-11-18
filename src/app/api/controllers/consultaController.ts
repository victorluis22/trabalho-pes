import catalogoDisponibilidade from '../model/catalogoDisponibilidade';
import catalogoPaciente from '../model/catalogoPaciente';
import Disponibilidade from '../model/disponibilidade';
import Paciente from '../model/paciente';
import Pagamento from '../model/pagamento';

interface criarConsultaReqProps {
  codPaciente: number;
  codDisp: number;
  valor: number;
  dataPagam: string;
  horaPagam: string;
  tipoPagam: string;
}

class ConsultaController {
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

    if (!paciente){
      return Response.json({ error: "Paciente não encontrado" });
    }

    const disponibilidade: Disponibilidade | undefined =
      catalogoDisponibilidade.encontraDisponibilidade(codDisp);

    if (!disponibilidade) {
      return Response.json({ error: "Disponibilidade não encontrada" });
    }

    const pagamento = new Pagamento(valor, dataPagam, horaPagam, tipoPagam)

    paciente.criaConsulta(disponibilidade, pagamento);

    const url = new URL('/pagamento/confirmacao', req.url);
    url.searchParams.append('data', JSON.stringify(paciente));

    return Response.redirect(url);
  }
}

export default new ConsultaController();
