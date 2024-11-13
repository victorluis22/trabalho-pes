import Disponibilidade from '@/app/api/model/disponibilidade';

import loadedMedics from './medics';
import loadedSchedules from './schedules';

const data = [
  {
    codDisp: 0,
    data_disp: '13/11/2024',
    horario: loadedSchedules[2],
    medico: loadedMedics[1],
  },
  {
    codDisp: 1,
    data_disp: '13/11/2024',
    horario: loadedSchedules[2],
    medico: loadedMedics[0],
  },
  {
    codDisp: 2,
    data_disp: '14/11/2024',
    horario: loadedSchedules[3],
    medico: loadedMedics[1],
  },
  {
    codDisp: 3,
    data_disp: '14/11/2024',
    horario: loadedSchedules[2],
    medico: loadedMedics[0],
  },
  {
    codDisp: 4,
    data_disp: '15/11/2024',
    horario: loadedSchedules[4],
    medico: loadedMedics[3],
  },
];

const loadedDisponibility: Disponibilidade[] = [];

data.map(({ codDisp, data_disp, horario, medico }) => {
  loadedDisponibility.push(
    new Disponibilidade(codDisp, data_disp, horario, medico)
  );
});

export default loadedDisponibility;
