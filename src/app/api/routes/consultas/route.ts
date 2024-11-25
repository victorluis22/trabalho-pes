import marcaConsultaController from '../../controllers/marcaConsultaController';

export async function POST(req: Request) {
  return marcaConsultaController.criarConsulta(req);
}
