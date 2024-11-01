import Paciente from "./paciente";

const victor: Paciente = new Paciente(
  "Victor Luis Teixeira Reis",
  "123456",
  "victorluis2002@gmail.com",
  "22998779458",
  "28523400",
  "00000000098",
  "05/12/2002",
  285,
  "R. Vicente Sobrinho",
  "Olaria",
  "Nova Friburgo",
  "Rio de Janeiro"
);

class CatalogoPaciente {
  pacientes: Paciente[] = [victor];

  encontraPaciente(id: number): Paciente | undefined {
    return this.pacientes.find((paciente) => {
      if (paciente.codPaciente === id) {
        return paciente;
      }

      return undefined;
    })
  }
}

export default new CatalogoPaciente();
