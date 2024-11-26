import { formatMoneyBRL } from '@/utils/money';

import Image from 'next/image';
import styles from './pix.module.css';

interface PixProps {
  price: number;
  pixCode: string;
  handleSubmit: () => void;
}

export default function Pix({ price, pixCode, handleSubmit }: Readonly<PixProps>) {
  return (
    <>
      <h3>Valor da consulta: {formatMoneyBRL(price)}</h3>

      <Image
        width={200}
        height={200}
        src="/qrcode.png"
        alt="QR Code de pagamento"
      />

      <div className={styles.code_container}>
        <p>{pixCode}</p>
      </div>

      <button className={styles.copy_button}>Copiar QR Code</button>

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
