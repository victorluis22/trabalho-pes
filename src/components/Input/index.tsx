import styles from './input.module.css';

import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';


interface InputProps {
  label: string;
  value: string;
  changeFunction: (value: string) => void;
  mask?: string | undefined;
}

export default function Input({
  label,
  value,
  changeFunction,
  mask
}: Readonly<InputProps>) {
  return (
    <div className={styles.container}>
      <label htmlFor={label}>{label}</label>
      {
        mask ? 
          <InputMask
            className={styles.input}
            name={label}
            value={value}
            onChange={(e) => changeFunction(e.target.value || "")}
            mask={mask}
          />
          :
          <InputText
            className={styles.input}
            name={label}
            value={value}
            onChange={(e) => changeFunction(e.target.value)}
          />
      }
      
    </div>
  );
}
