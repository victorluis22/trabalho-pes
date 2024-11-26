import {
  medicProps,
  disponibilityProps,
} from '@/services/mocks/appointmentPageMock';

import styles from './select.module.css';

interface SelectProps {
  name: string;
  label: string;
  value: number | undefined;
  type: 'medic' | 'schedule';
  data: disponibilityProps[] | medicProps[] | undefined;
  changeFunction: (value: string) => void;
}

export default function Select({
  name,
  label,
  value,
  type,
  data,
  changeFunction,
}: Readonly<SelectProps>) {
  if (!data) {
    return (
      <div className={styles.container}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>

        <select
          value={value ?? 'default'}
          className={styles.select}
          name={name}
          onChange={(e) => changeFunction(e.target.value)}
        >
          <option value={'default'}>Sem horários disponíveis</option>
        </select>
      </div>
    );
  } else if (type === 'medic') {
    const medics: medicProps[] = data as medicProps[];

    return (
      <div className={styles.container}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>

        <select
          value={value ?? 'default'}
          className={styles.select}
          name={name}
          onChange={(e) => changeFunction(e.target.value)}
        >
          <option value={'default'}>Selecione um médico</option>
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
    const schedules: disponibilityProps[] = data as disponibilityProps[];

    return (
      <div className={styles.container}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>

        <select
          value={value ?? 'default'}
          className={styles.select}
          name={name}
          onChange={(e) => changeFunction(e.target.value)}
        >
          <option value={'default'} defaultValue={undefined}>
            Selecione um horário
          </option>
          {schedules.map((each) => {
            if (!each.reserved) {
              return (
                <option key={each.id} value={each.id}>
                  {each.day} | {each.date} | {each.shift}
                </option>
              );
            }
          })}
        </select>
      </div>
    );
  }
}
