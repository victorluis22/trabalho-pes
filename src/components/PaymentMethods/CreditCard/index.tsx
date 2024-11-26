import { formatMoneyBRL } from '@/utils/money';
import { Dispatch, SetStateAction } from 'react';
import { creditDataProps } from '@/screens/payment';

import styles from './creditCard.module.css';
import Input from '@/components/Input';

interface PixProps {
  price: number;
  handleSubmit: () => void;
  creditData: creditDataProps;
  changeCreditData: Dispatch<SetStateAction<creditDataProps>>;
}

export default function CreditCard({
  price,
  handleSubmit,
  creditData,
  changeCreditData,
}: Readonly<PixProps>) {
  const { owner, number, expireDate, cvc } = creditData;

  const setNumber = (value: string) => {
    changeCreditData({ ...creditData, number: value });
  };

  const setOwner = (value: string) => {
    changeCreditData({ ...creditData, owner: value });
  };

  const setExpireDate = (value: string) => {
    changeCreditData({ ...creditData, expireDate: value });
  };

  const setCvc = (value: string) => {
    changeCreditData({ ...creditData, cvc: value });
  };

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
        <Input label="Nome no cartão" value={owner} changeFunction={setOwner} />
        <div className={styles.input_row_wrapper}>
          <Input
            label="Data de vencimento"
            value={expireDate}
            changeFunction={setExpireDate}
            mask="99/99/9999"
          />
          <Input label="CVC" value={cvc} changeFunction={setCvc} mask="999" />
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
