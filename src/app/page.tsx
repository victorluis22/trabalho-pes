'use client';

import { useState } from 'react';
import styles from './page.module.css';

import {
  medicData,
  medicProps,
  disponibilityProps,
} from '@/services/mocks/appointmentPageMock';

import Select from '@/components/Select';
import axios from 'axios';

export default function Home() {
  const [chosenMedic, setChosenMedic] = useState<medicProps | undefined>(
    undefined
  );
  const [chosenDisponibility, setChosenDisponibility] = useState<
    disponibilityProps | undefined
  >(undefined);

  const handleMedicSelect = (value: number) => {
    console.log('id do médico escolhido: ', value);

    const medic = medicData.find((medic) =>
      medic.id == value ? medic : undefined
    );

    setChosenMedic(medic);
    setChosenDisponibility(undefined);
  };

  const handleScheduleSelect = (value: number) => {
    console.log('id do horário escolhido: ', value);

    const schedule = chosenMedic?.schedules.find((schedule) =>
      schedule.id == value ? schedule : undefined
    );

    setChosenDisponibility(schedule);
  };

  const handleButton = async () => {
    const payload = {
      codPaciente: 1,
      codMedico: chosenMedic?.id,
      codDisp: chosenDisponibility?.id,
    };

    console.log('Dados enviados: ', payload);

    const response = await axios.post('/api/routes/consultas', payload);
    
    console.log(response);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Marcação de Consulta</h1>

        <Select
          name="medic"
          type="medic"
          label="Selecione o médico"
          value={chosenMedic?.id}
          data={medicData}
          onChangeFunction={handleMedicSelect}
        />

        <Select
          name="schedule"
          type="schedule"
          label="Selecione o horário disponível para consulta"
          value={chosenDisponibility?.id}
          data={chosenMedic?.schedules}
          onChangeFunction={handleScheduleSelect}
        />

        <div className={styles.confirmation_container}>
          <h3 className={styles.confirmation_title}>Confirmar informações</h3>
          <p>
            <b>Médico: </b>
            {chosenMedic
              ? `${chosenMedic.name} | ${chosenMedic.specialty}`
              : 'Nenhum médico escolhido'}
          </p>
          <p>
            <b>Horário: </b>
            {chosenDisponibility
              ? `${chosenDisponibility.day} | ${chosenDisponibility.date} | ${chosenDisponibility.shift}`
              : 'Nenhum horário escolhido'}
          </p>
        </div>

        <button className={styles.button} onClick={() => handleButton()}>
          Confirmar
        </button>
      </div>
    </div>
  );
}
