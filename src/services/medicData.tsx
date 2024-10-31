export interface medicProps {
  id: number;
  name: string;
  specialty: string;
  schedules: scheduleProps[];
}

export interface scheduleProps {
  id: number;
  day: string;
  shift: string;
}

export const medicData: medicProps[] = [
  {
    id: 0,
    name: "Dr. Sandra",
    specialty: "Cardiologista",
    schedules: [
      {
        id: 0,
        day: "Segunda-Feira",
        shift: "13:00 - 14:00",
      },
      {
        id: 1,
        day: "Quarta-Feira",
        shift: "15:00 - 16:00",
      },
    ],
  },
  {
    id: 1,
    name: "Dr. João",
    specialty: "Dermatologista",
    schedules: [
      {
        id: 0,
        day: "Terça-Feira",
        shift: "09:00 - 10:00",
      },
      {
        id: 1,
        day: "Sexta-Feira",
        shift: "14:00 - 15:00",
      },
    ],
  },
  {
    id: 2,
    name: "Dra. Maria",
    specialty: "Pediatra",
    schedules: [
      {
        id: 0,
        day: "Quarta-Feira",
        shift: "10:00 - 11:00",
      },
      {
        id: 1,
        day: "Sábado",
        shift: "08:00 - 09:00",
      },
    ],
  },
  {
    id: 3,
    name: "Dr. Carlos",
    specialty: "Oftalmologista",
    schedules: [
      {
        id: 0,
        day: "Segunda-Feira",
        shift: "11:00 - 12:00",
      },
      {
        id: 1,
        day: "Quinta-Feira",
        shift: "16:00 - 17:00",
      },
    ],
  },
  {
    id: 4,
    name: "Dra. Ana",
    specialty: "Ginecologista",
    schedules: [
      {
        id: 0,
        day: "Terça-Feira",
        shift: "14:00 - 15:00",
      },
      {
        id: 1,
        day: "Sexta-Feira",
        shift: "09:00 - 10:00",
      },
    ],
  },
];
