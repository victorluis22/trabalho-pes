import { formatMoneyBRL } from '@/utils/money';
import { useState } from 'react';

import styles from './creditCard.module.css';
import Input from '@/components/Input';

interface PixProps {
  price: number;
  handleSubmit: () => void;
}

export default function CreditCard({
  price,
  handleSubmit,
}: Readonly<PixProps>) {
  const [number, setNumber] = useState("");
  const [owner, setOwner] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <>
      <h3>Valor da consulta: {formatMoneyBRL(price)}</h3>

      <div className={styles.input_container}>
        <Input
          label="Número do cartão"
          value={number}
          changeFunction={setNumber}
          mask="9999 9999 9999 9999"
        />
        <Input
          label="Nome no cartão"
          value={owner}
          changeFunction={setOwner}
        />
        <div className={styles.input_row_wrapper}>
          <Input
            label="Data de vencimento"
            value={expireDate}
            changeFunction={setExpireDate}
            mask='99/99/9999'
          />
          <Input
            label="CVC"
            value={cvc}
            changeFunction={setCvc}
            mask='999'
          />
        </div>
      </div>

      <button
        className={styles.button}
        type="submit"
        onClick={() => handleSubmit()}
      >
        Confirmar Pagamento
      </button>
    </>
  );
}
