"use client";

import { useState } from "react";
import styles from "./page.module.css";

import { medicData, medicProps, scheduleProps } from "@/services/medicData";
import Select from "@/components/Select";
import axios from "axios";

export default function Home() {
  const [chosenMedic, setChosenMedic] = useState<medicProps | undefined>(
    undefined
  );
  const [chosenSchedule, setChosenSchedule] = useState<
    scheduleProps | undefined
  >(undefined);

  const handleMedicSelect = (value: number) => {
    console.log("id do médico escolhido: ", value);
    setChosenMedic(medicData[value]);
    setChosenSchedule(undefined);
  };

  const handleScheduleSelect = (value: number) => {
    console.log("id do horário escolhido: ", value);
    setChosenSchedule(chosenMedic?.schedules[value]);
  };

  const handleButton = async () => {
    const response = await axios.post("/api/routes/consultas", {codPaciente: 1})
    console.log(response)
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
          value={chosenSchedule?.id}
          data={chosenMedic?.schedules}
          onChangeFunction={handleScheduleSelect}
        />

        <div className={styles.confirmation_container}>
          <h3 className={styles.confirmation_title}>Confirmar informações</h3>
          <p>
            <b>Médico: </b>
            {chosenMedic ? `${chosenMedic.name} | ${chosenMedic.specialty}`: "Nenhum médico escolhido"}
          </p>
          <p>
            <b>Horário: </b>
            {chosenSchedule ? `${chosenSchedule.day} | ${chosenSchedule.shift}`: "Nenhum horário escolhido"}
          </p>
        </div>

        <button className={styles.button} onClick={() => handleButton()}>Confirmar</button>
      </div>
    </div>
  );
}
