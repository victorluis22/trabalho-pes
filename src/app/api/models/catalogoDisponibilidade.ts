import loadedDisponibility from '@/services/loaded/disponibility';
import Disponibilidade from './disponibilidade';

class CatalogoDisponibilidade {
  disponibilidades: Disponibilidade[] = loadedDisponibility;

  encontraDisponibilidade(codDisp: number): Disponibilidade | undefined {
    return this.disponibilidades.find((disponibilidade) => {
      if (disponibilidade.codDisp === codDisp) {
        return disponibilidade;
      }

      return undefined;
    });
  }
}

const catalogoDisponibilidade = new CatalogoDisponibilidade();

export default catalogoDisponibilidade;
