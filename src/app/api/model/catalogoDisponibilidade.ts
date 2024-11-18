import loadedDisponibility from '@/services/loaded/disponibility';
import Disponibilidade from './disponibilidade';

class CatalogoDisponibilidade {
  disponibilidades: Disponibilidade[] = loadedDisponibility;

  encontraDisponibilidade(id: number): Disponibilidade | undefined {
    return this.disponibilidades.find((disponibilidade) => {
      if (disponibilidade.codDisp === id) {
        return disponibilidade;
      }

      return undefined;
    });
  }
}

export default new CatalogoDisponibilidade();
