import { medicProps, scheduleProps } from "@/services/medicData";
import styles from "./select.module.css";

interface SelectProps {
  name: string;
  label: string;
  value: number | undefined;
  type: "medic" | "schedule";
  data: scheduleProps[] | medicProps[] | undefined;
  onChangeFunction: Function;
}

export default function Select({
  name,
  label,
  value,
  type,
  data,
  onChangeFunction
}: Readonly<SelectProps>) {
  if (!data) {
    return (
      <div className={styles.container}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>

        <select value={value ?? "default"} className={styles.select} name={name} onChange={(e) => onChangeFunction(e.target.value)}>
          <option value={"default"}>Sem horários disponíveis</option>
        </select>
      </div>
    );
  } else if (type === "medic") {
    const medics: medicProps[] = data as medicProps[];

    return (
      <div className={styles.container}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>

        <select value={value ?? "default"} className={styles.select} name={name} onChange={(e) => onChangeFunction(e.target.value)}>
          <option value={"default"}>Selecione um médico</option>
          {medics.map((each) => {
            return (
              <option key={each.id} value={each.id}>
                {each.name} | {each.specialty}
              </option>
            );
          })}
        </select>
      </div>
    );
  } else {
    const schedules: scheduleProps[] = data as scheduleProps[];

    return (
      <div className={styles.container}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>

        <select value={value ?? "default"} className={styles.select} name={name} onChange={(e) => onChangeFunction(e.target.value)}>
          <option value={"default"} defaultValue={undefined}>Selecione um horário</option>
          {schedules.map((each) => {
            return (
              <option key={each.id} value={each.id}>
                {each.day} | {each.shift}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
