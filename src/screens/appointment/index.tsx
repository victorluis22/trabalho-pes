'use client';

import { useState } from 'react';
import styles from './appointment.module.css';

import {
  medicData,
  medicProps,
  disponibilityProps,
} from '@/services/mocks/appointmentPageMock';

import Select from '@/components/Select';
import { useRouter } from 'next/navigation';

export default function AppointmentPage() {
  const [chosenMedic, setChosenMedic] = useState<medicProps | undefined>(
    undefined
  );
  const [chosenDisponibility, setChosenDisponibility] = useState<
    disponibilityProps | undefined
  >(undefined);

  const router = useRouter();

  const handleMedicSelect = (value: string) => {
    console.log('Id do médico escolhido: ', value);

    const medic = medicData.find((medic) =>
      medic.id == parseInt(value) ? medic : undefined
    );

    setChosenMedic(medic);
    setChosenDisponibility(undefined);
  };

  const handleScheduleSelect = (value: string) => {
    console.log('Id do horário escolhido: ', value);

    const schedule = chosenMedic?.schedules.find((schedule) =>
      schedule.id == parseInt(value) ? schedule : undefined
    );

    setChosenDisponibility(schedule);
  };

  const handleButton = async () => {
    if (chosenMedic && chosenDisponibility) {
      return router.push(
        `/pagamento?disponibilidade=${chosenDisponibility.id}`
      );
    }

    return alert('Preencha todos os campos do formulário.');
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
          changeFunction={handleMedicSelect}
        />

        <Select
          name="schedule"
          type="schedule"
          label="Selecione o horário disponível para consulta"
          value={chosenDisponibility?.id}
          data={chosenMedic?.schedules}
          changeFunction={handleScheduleSelect}
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
