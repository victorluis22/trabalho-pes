import loadedPacients from '@/services/loaded/pacients';
import Paciente from './paciente';

class CatalogoPaciente {
  pacientes: Paciente[] = loadedPacients;

  encontraPaciente(id: number): Paciente | undefined {
    return this.pacientes.find((paciente) => {
      if (paciente.codPaciente === id) {
        return paciente;
      }

      return undefined;
    });
  }
}

export default new CatalogoPaciente();
