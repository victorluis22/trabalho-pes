'use client';

import Image from 'next/image';
import styles from './payment.module.css';

import { useState } from 'react';
import axios from 'axios';

export default function PaymentPage() {
  const price = 250.0;
  const pixCode =
    '00020126360014BR.GOV.BCB.PIX0114+55819999999925204000053039865802BR5907Company6009City7008City99945802BR';

  const [chosenPaymentId, setChosenPaymentId] = useState<number | undefined>(0);

  const paymentMethods = [
    {
      id: 0,
      name: 'PIX',
      image: '/pix.svg',
    },
    {
      id: 1,
      name: 'Cartão',
      image: '/card.svg',
    },
    {
      id: 2,
      name: 'Boleto',
      image: '/bill.svg',
    },
  ];

  const handleSubmit = async () => {
    const now = new Date();

    const payload = {
      codPaciente: 1,
      codMedico: 1,
      codDisp: 2,
      valor: price,
      dataPagam: `${now.getDay}/${now.getMonth}/${now.getFullYear}`,
      horaPagam: `${now.getHours}:${now.getMinutes}:${now.getSeconds}`,
      tipo: paymentMethods.find((method) =>
        method.id == chosenPaymentId ? method.name : undefined
      ),
    };

    console.log('Dados enviados: ', payload);

    const response = await axios.post('/api/routes/consultas', payload);

    console.log(response);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Checkout de Pagamento</h1>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3>Valor da consulta: {price}</h3>

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

            <button className={styles.button}>Confirmar Pagamento</button>
          </div>
          <div className={styles.methods}>
            <h3>Selecione um método de pagamento</h3>

            <div className={styles.method_list}>
              {paymentMethods.map(({ id, image, name }) => {
                return (
                  <button
                    key={id}
                    className={
                      id == chosenPaymentId
                        ? styles.method_card_selected
                        : styles.method_card
                    }
                    onClick={() => setChosenPaymentId(id)}
                  >
                    <Image
                      width={50}
                      height={50}
                      src={image}
                      alt={`Logo ${name}`}
                    />
                    <p>{name}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
