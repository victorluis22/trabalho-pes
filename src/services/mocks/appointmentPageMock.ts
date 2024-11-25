export interface medicProps {
  id: number;
  name: string;
  specialty: string;
  schedules: disponibilityProps[];
  price: number;
}

export interface disponibilityProps {
  id: number;
  date: string;
  day: string;
  shift: string;
  reserved: boolean;
}

import loadedDisponibility from '../loaded/disponibility';

export const medicData: medicProps[] = [
  {
    id: loadedDisponibility[0].medico.codMedico,
    name: loadedDisponibility[0].medico.nome,
    specialty: loadedDisponibility[0].medico.especialidade.nome,
    price: loadedDisponibility[0].medico.preco,
    schedules: [
      {
        id: loadedDisponibility[0].codDisp,
        date: loadedDisponibility[0].data,
        day: loadedDisponibility[0].horario.dia,
        shift: `${loadedDisponibility[0].horario.horaIni} - ${loadedDisponibility[0].horario.horaFim}`,
        reserved: loadedDisponibility[0].reservado,
      },
      {
        id: loadedDisponibility[2].codDisp,
        date: loadedDisponibility[2].data,
        day: loadedDisponibility[2].horario.dia,
        shift: `${loadedDisponibility[2].horario.horaIni} - ${loadedDisponibility[2].horario.horaFim}`,
        reserved: loadedDisponibility[2].reservado,
      },
    ],
  },
  {
    id: loadedDisponibility[1].medico.codMedico,
    name: loadedDisponibility[1].medico.nome,
    specialty: loadedDisponibility[1].medico.especialidade.nome,
    price: loadedDisponibility[1].medico.preco,
    schedules: [
      {
        id: loadedDisponibility[1].codDisp,
        date: loadedDisponibility[1].data,
        day: loadedDisponibility[1].horario.dia,
        shift: `${loadedDisponibility[1].horario.horaIni} - ${loadedDisponibility[1].horario.horaFim}`,
        reserved: loadedDisponibility[1].reservado,
      },
      {
        id: loadedDisponibility[3].codDisp,
        date: loadedDisponibility[3].data,
        day: loadedDisponibility[3].horario.dia,
        shift: `${loadedDisponibility[3].horario.horaIni} - ${loadedDisponibility[3].horario.horaFim}`,
        reserved: loadedDisponibility[3].reservado,
      },
    ],
  },
  {
    id: loadedDisponibility[4].medico.codMedico,
    name: loadedDisponibility[4].medico.nome,
    specialty: loadedDisponibility[4].medico.especialidade.nome,
    price: loadedDisponibility[4].medico.preco,
    schedules: [
      {
        id: loadedDisponibility[4].codDisp,
        date: loadedDisponibility[4].data,
        day: loadedDisponibility[4].horario.dia,
        shift: `${loadedDisponibility[4].horario.horaIni} - ${loadedDisponibility[4].horario.horaFim}`,
        reserved: loadedDisponibility[4].reservado,
      },
    ],
  },
];
