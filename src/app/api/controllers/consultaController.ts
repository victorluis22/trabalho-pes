import catalogoPaciente from '../model/catalogoPaciente';
import Paciente from '../model/paciente';

interface criarConsultaReqProps {
  codPaciente: number;
  codMedico: number;
  codDisp: number;
}

class ConsultaController {
  constructor() {}

  async criarConsulta(req: Request) {
    const { codPaciente }: criarConsultaReqProps = await req.json();

    const paciente: Paciente | undefined =
      catalogoPaciente.encontraPaciente(codPaciente);

    if (paciente) {
      paciente.criaConsulta();
    }

    return Response.json({ sucess: paciente });
  }
}

export default new ConsultaController();
