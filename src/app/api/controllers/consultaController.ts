import catalogoPaciente from "../classes/catalogoPaciente";
import Paciente from "../classes/paciente";

class ConsultaController {
  constructor() {}

  async criarConsulta(req: Request) {
    const body = await req.json();

    const paciente: Paciente | undefined = catalogoPaciente.encontraPaciente(body.codPaciente);
    console.log(paciente);

    return Response.json({ sucess: true });
  }
}

export default new ConsultaController();
