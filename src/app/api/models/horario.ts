class Horario {
  codHorario: number;
  dia: string;
  horaIni: string;
  horaFim: string;

  constructor(
    codHorario: number,
    dia: string,
    horaIni: string,
    horaFim: string
  ) {
    this.codHorario = codHorario;
    this.dia = dia;
    this.horaIni = horaIni;
    this.horaFim = horaFim;
  }
}

export default Horario;
