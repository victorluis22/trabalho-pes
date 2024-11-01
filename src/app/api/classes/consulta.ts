import Avaliacao from "./avaliacao";

class Consulta {
  status: "Marcada" | "Feita";
  // avaliacao: Avaliacao | null;

  constructor() {
    this.status = "Marcada";
    // this.avaliacao = null;
  }
}

export default Consulta
