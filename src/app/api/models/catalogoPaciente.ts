import loadedPacients from '@/services/loaded/pacients';
import Paciente from './paciente';

class CatalogoPaciente {
  pacientes: Paciente[] = loadedPacients;

  encontraPaciente(codPaciente: number): Paciente | undefined {
    return this.pacientes.find((paciente) => {
      if (paciente.codPaciente === codPaciente) {
        return paciente;
      }

      return undefined;
    });
  }
}

const catalogoPaciente = new CatalogoPaciente();

export default catalogoPaciente;
