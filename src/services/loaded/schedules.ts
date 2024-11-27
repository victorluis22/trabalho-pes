import Horario from '@/app/api/models/horario';

const data = [
  {
    codHorario: 0,
    dia: 'Segunda-feira',
    horaIni: '13:00',
    horaFim: '14:00',
  },
  {
    codHorario: 1,
    dia: 'Terça-feira',
    horaIni: '13:00',
    horaFim: '14:00',
  },
  {
    codHorario: 2,
    dia: 'Quarta-feira',
    horaIni: '13:00',
    horaFim: '14:00',
  },
  {
    codHorario: 3,
    dia: 'Quinta-feira',
    horaIni: '13:00',
    horaFim: '14:00',
  },
  {
    codHorario: 4,
    dia: 'Sexta-feira',
    horaIni: '13:00',
    horaFim: '14:00',
  },
];

const loadedSchedules: Horario[] = [];

data.map(({ codHorario, dia, horaIni, horaFim }) => {
  loadedSchedules.push(new Horario(codHorario, dia, horaIni, horaFim));
});

export default loadedSchedules;
