import consultaController from "../../controllers/consultaController";

export async function POST(req: Request) {
  return consultaController.criarConsulta(req);
}
